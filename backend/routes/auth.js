const { Router } = require('express')
const router = Router()


router.post('/register', require('../controlers/authControler/register'))
router.post('/login', require('../controlers/authControler/login'))


module.exports = router