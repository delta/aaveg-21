const router = require('express').Router()
const studentAuthController = require('../controllers/authController')

router.post('/login', studentAuthController.login)
router.get('/validatejwt', studentAuthController.validateJWT, async (req, res) => {
  res.status(200).json({ jwt: 'valid' })
})
router.get('/adminonly', studentAuthController.validateJWT, studentAuthController.adminRoute, async (req, res) => {
  res.status(200).json({ admin: true })
})
router.post('/checkLogin', studentAuthController.validateJWT, async (req, res) => {
  res.status(200).json({ isLoggedIn: true })
})
router.get('/info', studentAuthController.validateJWT, studentAuthController.userInfo)
router.post('/logout', studentAuthController.logout)

module.exports = router
