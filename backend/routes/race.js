const { Router } = require('express')
const router = Router()
const verifyToken = require('../middleware/middleware.js')

// GET
router.get('/all', require('../controllers/raceControllers/getAllRaceControllers'))
// POST 
router.post('/add', verifyToken , require('../controllers/raceControllers/addRaceControllers'))

// PUT

router.put('/:raceId',verifyToken, require('../controllers/raceControllers/editRaceControllers.js'))

// DELETE

module.exports = router