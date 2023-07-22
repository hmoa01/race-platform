const { Router } = require('express');
const router = Router();

router.use('/user', require('./user'));
router.use('/auth', require('./auth'));
router.use('/race', require('./race'));
router.use('/contestant', require('./contestants'));
router.use('/dashboard', require('./dashboard'))

module.exports = router;
