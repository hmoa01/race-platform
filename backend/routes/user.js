const { Router} = require('express')
const router = Router()



// GET 
router.get('/', require('../controlers/userControler/getAllUsers'))

module.exports = router