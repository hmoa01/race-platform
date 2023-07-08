const { Router } = require('express')
const router = Router()


router.post('/register', require('../controlers/authControllers/register'))
router.post('/login', require('../controlers/authControllers/login'))


module.exports = router