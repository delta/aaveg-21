const jwt = require('jsonwebtoken')
const Student = require('../models/Student')
const config = require('../config/config')
const logger = require('../config/winston')
const authFetch = require('../utils/authUtil')

exports.login = async (req, res) => {
  logger.silly(req.body)

  if (!req.body.email || !req.body.password) {
    res.status(400).json({ message: 'Fill email and password' })
    return
  }
  const { email, password } = req.body
  const rollnumber = email.split('@')[0]
  const regex = /[\d]{4}20[\d]{3}/gm

  if (!regex.test(rollnumber) && !config.adminUsers.includes(rollnumber)) {
    logger.warn(`Roll number ${rollnumber} does not belong to first year or admin`)
    res.status(400).json({ message: 'Roll number does not belong to first year or admin' })
    return
  }
  const response = {}

  if (await authFetch(rollnumber, password) === 1) {
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

          Student.create(
            {
              rollnumber: rollnumber,
              hostel: 'Not Chosen'
            },
            function (err, newstudent) {
              if (err) {
                logger.error(`Error Creating New Entry ${rollnumber}: ${err}`)
                return
              }
              response.user_id = newstudent.id
            }
          )
        } else {
          response.user_id = student._id
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
        response.isFilled = student.isFilled
        res.cookie('auth', APIToken, { maxAge: config.cookieExpTime, httpOnly: true })
        logger.info(`Student ${rollnumber} logged in`)

        res.status(200).send(response)
      }
    )
  } else {
    logger.error(`Invalid Credentials ${rollnumber}`)

    response.message = 'Invalid Credentials'

    res.status(401)
    res.send(response)
  }
}

exports.validateJWT = async (req, res, next) => {
  console.log(req.cookies)

  if (!req.cookies.auth) {
    logger.error('Auth cookie does not exist')
    res.status(400).json({ message: 'Missing API token' })
    return
  }
  const APIToken = req.cookies.auth
  console.log(APIToken)
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
            logger(err)
            res.status(400).json({ message: 'Error Finding user' })
          } else if (!student) {
            logger(`Could not find ${decoded.user_id}`)
            res.status(401).json({ message: 'No entry exist for student' })
          } else {
            req.user = {}
            req.user.id = decoded.user_id
            req.user.rollnumber = decoded.rollnumber
            req.user.isAdmin = decoded.isAdmin
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
exports.checkLogin = async (req, res, next) => {
  logger.silly(req.user)
  if (req.user == null) {
    logger.err('User Not logged In')
    res.status(403).json({ message: 'User not Logged In' })
  } else {
    next()
  }
}

exports.logout = async (req, res) => {
  res.cookie('auth', '', { maxAge: 0, httpOnly: true })
}
