const {Router} = require('express')
const router = Router()
const registrationController = require('../controllers/registrationController')

router.post('/register', registrationController.register)

module.exports = router