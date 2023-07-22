const { Router } = require('express');
const router = Router();
const verifyToken = require('../middleware/middleware.js');
const promiseWrapper = require('../middleware/promiseWrapper.js');

// GET
router.get(
  '/all',
  verifyToken,
  promiseWrapper(require('../controllers/contestantsControllers/getAllContestants'))
);

// POST
router.post(
  '/add',
  verifyToken,
  promiseWrapper(require('../controllers/contestantsControllers/addContestant'))
);


module.exports = router;