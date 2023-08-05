const { Router } = require('express');
const promiseWrapper = require('../middleware/promiseWrapper.js');
const router = Router();

// GET
router.post(
  '/',
  promiseWrapper(require('../controllers/authControllers/google'))
);

module.exports = router;
