const { Router } = require('express')
const router = Router()
const verifyToken = require('../middleware/middleware.js')


// POST 
router.post('/add', verifyToken , require('../controllers/raceControllers/addRaceControllers'))



module.exports = router