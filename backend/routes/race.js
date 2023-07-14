const { Router } = require('express')
const router = Router()
const verifyToken = require('../middleware/middleware.js')
const promiseWrapper = require('../middleware/promiseWrapper.js')

// POST 
router.post('/add', verifyToken, promiseWrapper(require('../controllers/raceControllers/addRaceControllers')))



module.exports = router