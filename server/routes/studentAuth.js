const router = require('express').Router()
const studentAuthController = require('../controllers/studentAuthController')

router.post('/login', studentAuthController.login)
router.get('/validatejwt', studentAuthController.validateJWT, async (req, res) => {
  res.status(200).json({ jwt: 'valid' })
}
)
module.exports = router
