const imaps = require('imap-simple')
const jwt = require('jsonwebtoken')
const Student = require('../models/Student')
const config = require('../config/config')
const logger = require('../config/winston')

exports.login = async (req, res) => {
  logger.silly(req.body)

  if (!req.body.rollnumber || !req.body.password) {
    res.status(400).json({ message: 'Fill username and password' })
    return
  }
  const { rollnumber, password } = req.body

  if (rollnumber[4] !== '2' && rollnumber[5] !== '0') {
    res.status(400).json({ message: 'Roll number does not belong to first year' })
    return
  }

  const imapConfig = {
    imap: {
      user: rollnumber,
      password: password,
      host: '203.129.195.133',
      port: 143,
      tls: false,
      authTimeout: 30000
    }
  }

  imaps.connect(imapConfig)
    .then(async (connection) => {
      const response = {
        message: 'Login Successful'
      }

      // Find User ID
      Student.findOne(
        { rollnumber: rollnumber },
        function (err, student) {
          if (err) {
            logger.error(err)
          }
          // If student doesn't exist create a new entry.
          if (!student) {
            logger.info(`Creating new entry for roll number ${rollnumber}`)

            Student.create(
              {
                rollnumber: rollnumber,
                hostel: 'Not Chosen'
              },
              function (err, newstudent) {
                if (err) {
                  logger.error(`Error Creating User: ${err}`)
                }
                response.user_id = newstudent.id

                response.APIToken = jwt.sign(
                  {
                    user_id: response.user_id,
                    time: Date.now()
                  },
                  config.jwtSecret,
                  { algorithm: 'HS256' }
                )

                logger.info(`Student ${rollnumber} logged in`)

                res.status(200)
                res.send(response)
              }
            )
          } else {
            response.user_id = student._id

            response.APIToken = jwt.sign(
              { user_id: response.user_id, time: Date.now() },
              config.jwtSecret,
              { algorithm: 'HS256' }
            )

            logger.info(`Student ${rollnumber} logged in`)

            res.status(200)
            res.send(response)
          }
        }
      )
    })
    .catch((err) => {
      logger.error(err)

      const response = {
        message: 'Invalid Credentials'
      }

      res.status(401)
      res.send(response)
    })
}

exports.validateJWT = async (req, res, next) => {
  if (!req.body.APIToken) {
    res.status(400).json({ message: 'Missing API token' })
    return
  }

  jwt.verify(
    req.body.APIToken,
    config.jwtSecret,
    { algorithms: ['HS256'] },
    async (err, decoded) => {
      if (err) {
        logger.error(err)
        res.status(400).json({ message: 'Error Decoding API' })
      } else {
        Student.findById(decoded.user_id, async (err, student) => {
          if (err) {
            res.status(400).json({ message: 'Error Finding user' })
          } else if (!student) {
            res.status(401).json({ message: 'Invalid API token' })
          } else {
            req.user_id = decoded.user_id
            next()
          }
        })
      }
    }
  )
}
