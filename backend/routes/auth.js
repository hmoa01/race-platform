const { Router } = require('express');
const router = Router();

router.post('/register', require('../controllers/authControllers/register'));
router.post('/login', require('../controllers/authControllers/login'));

module.exports = router;
