const { Router } = require('express');
const verifyToken = require('../middleware/middleware.js');
const promiseWrapper = require('../middleware/promiseWrapper.js');
const router = Router();

// GET 
router.get('/superAdmin/:userId',verifyToken ,promiseWrapper(require('../controllers/dashboardControllers/superAdminDashboardControllers.js')))


module.exports = router;