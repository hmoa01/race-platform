const { Router} = require('express')
const verifyToken = require('../midleware/verifyToken')
const router = Router()



// GET 
router.get('/', require('../controlers/userControllers/getAllUsers'))

// PUT
router.put('/update/:id', verifyToken,  require('../controlers/userControllers/updateUser')) 

module.exports = router