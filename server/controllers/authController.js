const jwt = require('jsonwebtoken')
const Student = require('../models/Student')
const config = require('../config/config')
const logger = require('../config/winston')
const authFetch = require('../utils/authUtil')
const girlsRollNumber = require('../config/girlsRollNumber')

exports.login = async (req, res) => {
  logger.silly(req.body)

  if (!req.body.email || !req.body.password) {
    res.status(400).json({ message: 'Fill email and password' })
    return
  }
  const { email, password } = req.body
  const emailregex = /^[\d]{9}@nitt.edu$/gm

  if (!emailregex.test(email)) {
    logger.warn(`${email} is not Webmail`)
    res.status(401).json({ message: 'Please check your Webmail ID' })
    return
  }

  const rollnumber = email.split('@')[0]
  const regex = /^[\d]{4}20[\d]{3}$/gm

  if (!regex.test(rollnumber) && !config.adminUsers.includes(rollnumber)) {
    logger.warn(`Roll number ${rollnumber} does not belong to first year or admin`)
    res.status(404).json({ message: 'Roll number does not belong to first year or admin' })
    return
  }
  const response = {}
  const checkCreds = await authFetch(rollnumber, password)
  if (checkCreds === 1) {
    response.message = 'Login Successful'
    // Find User ID
    Student.findOne(
      { rollnumber: rollnumber },
      async (err, student) => {
        if (err) {
          logger.error(`Error finding ${rollnumber} : ${err}`)
        }
        // If student doesn't exist create a new entry.
        if (!student) {
          logger.info(`Creating new db entry for roll number ${rollnumber}`)
          const isGirl = girlsRollNumber.includes(rollnumber)
          const newStudent = new Student({
            rollnumber: rollnumber,
            isGirl: isGirl
          })
          await newStudent.save()
          response.user_id = newStudent._id
          response.isFilled = newStudent.isFilled
          response.isGirl = newStudent.isGirl
          response.hostel = student.hostel
        } else {
          response.user_id = student._id
          response.isFilled = student.isFilled
          response.isGirl = student.isGirl
          response.hostel = student.hostel
        }
        const APIToken = await jwt.sign(
          {
            user_id: response.user_id,
            rollnumber: rollnumber,
            isAdmin: config.adminUsers.includes(rollnumber)
          },
          config.jwtSecret,
          { algorithm: 'HS256' }
        )
        response.APIToken = APIToken
        response.rollnumber = rollnumber
        res.cookie(
          'auth',
          APIToken,
          {
            maxAge: config.cookieExpTime,
            httpOnly: true,
            signed: true
          })
        logger.info(`Student ${rollnumber} logged in`)
        res.status(200).send(response)
      }
    )
  } else if (checkCreds === 2) {
    logger.error('Server has error making requests to webmail')
    response.message = 'Oops! something went wrong.'
    res.status(500).send(response)
  } else {
    logger.error(`Invalid Credentials ${rollnumber}`)

    response.message = 'Invalid Credentials'

    res.status(401)
    res.send(response)
  }
}

exports.validateJWT = async (req, res, next) => {
  if (!req.signedCookies.auth) {
    logger.error('Auth cookie does not exist')
    res.status(206).json({ message: 'Missing API token' })
    return
  }
  const APIToken = req.signedCookies.auth
  jwt.verify(
    APIToken,
    config.jwtSecret,
    { algorithms: ['HS256'] },
    async (err, decoded) => {
      logger.silly(decoded)
      if (err) {
        logger.error(err)
        res.status(400).json({ message: 'Error Decoding API Token' })
      } else {
        Student.findById(decoded.user_id, async (err, student) => {
          if (err) {
            logger.error(err)
            res.status(400).json({ message: 'Error Finding user' })
          } else if (!student) {
            logger.info(`Could not find ${decoded.user_id}`)
            res.status(401).json({ message: 'No entry exist for student' })
          } else {
            req.user = {}
            req.user.id = decoded.user_id
            req.user.rollnumber = decoded.rollnumber
            req.user.isAdmin = decoded.isAdmin
            req.user.isFilled = student.isFilled
            req.user.isGirl = student.isGirl
            req.user.hostel = student.hostel
            next()
          }
        })
      }
    }
  )
}

exports.adminRoute = async (req, res, next) => {
  if (req.user.isAdmin === true) {
    next()
  } else {
    logger.warn(`${req.rollnumber} tried accessing admin routes`)
    res.status(403).json({ message: 'Access Forbidden' })
  }
}

exports.userInfo = async (req, res) => {
  res.status(200).send(req.user)
}

exports.logout = async (req, res) => {
  res.clearCookie('auth')
  res.status(200).json({ message: 'Logged Out' })
}
