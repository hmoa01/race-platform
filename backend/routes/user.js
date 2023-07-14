const { Router } = require('express');
const verifyToken = require('../middleware/middleware');
const promiseWrapper = require('../middleware/promiseWrapper');
const router = Router();

// GET
router.get('/', promiseWrapper(require('../controllers/userControllers/getAllUsers')));

// POST

// PUT
router.put(
  '/update/:id',
  verifyToken,
  promiseWrapper(require('../controllers/userControllers/updateUser'))
);

module.exports = router;
