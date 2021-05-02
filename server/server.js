const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const cookieparser = require('cookie-parser')
const config = require('./config/config.js')
const allocation = require('./allocation')
const Student = require('./models/Student')
const auth = require('./routes/auth')
const quizRoutes = require('./routes/quizRoutes')

app.use(cors({ origin: true, credentials: true }))
app.use(function (req, res, next) {
  // res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err))

// Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Cookie Parser
app.use(cookieparser(config.cookieSecret))

// Router
app.use('/api/quiz', quizRoutes)
app.use('/api/auth', auth)

app.get('/api/status', async (req, res) => {
  res.status(200).json({ message: 'i am alive' })
})

// seed db
allocation.forEach(async ({ rollnumber, clan }) => {
  if (clan !== '') {
    await Student.findOneAndUpdate(
      { rollnumber: rollnumber },
      { hostel: clan },
      { upsert: true, new: true })
  }
})

const PORT = config.port || process.env.PORT

app.listen(PORT, () => console.log(`Server Running in Port: ${PORT}`))
