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

//RESET PASSWORD
router.post(
  '/forget-password',
  promiseWrapper(require('../controllers/authControllers/forgetPassword'))
);

router.post(
  '/reset-password',
  promiseWrapper(require('../controllers/authControllers/resetPassword'))
);

module.exports = router;
