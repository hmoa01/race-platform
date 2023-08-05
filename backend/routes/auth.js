const { Router } = require('express');
const promiseWrapper = require('../middleware/promiseWrapper');
const router = Router();

router.post(
  '/register',
  promiseWrapper(require('../controllers/authControllers/register'))
);
router.post(
  '/login',
  promiseWrapper(require('../controllers/authControllers/login'))
);

module.exports = router;
