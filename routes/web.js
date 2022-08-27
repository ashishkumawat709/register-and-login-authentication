const express = require('express')
const router = express.Router()
const usercontroller = require('../controller/userController')

router.get('/',usercontroller.home)
router.get('/login', usercontroller.login)
router.get('/registration',usercontroller.registration )
router.post('/registration', usercontroller.createDoc)
router.post('/login', usercontroller.verifyLogin)

module.exports = router