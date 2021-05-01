const mongoose = require('mongoose')
const allocation = require('./allocation')
const config = require('./config/config')
const Student = require('./models/Student')

mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err))

const main = () => {
  allocation.forEach(async ({ rollnumber, clan }) => {
    if (clan === '') {
      return
    }
    console.log(rollnumber, clan)
    await Student.findOneAndUpdate(
      { rollnumber: rollnumber },
      { hostel: clan },
      { upsert: true, new: true })
  })
}

main()
