const { Router } = require('express');
const verifyToken = require('../middleware/middleware');
const router = Router();

// GET
router.get('/', require('../controllers/userControllers/getAllUsers'));

// POST

// PUT
router.put(
  '/update/:id',
  verifyToken,
  require('../controllers/userControllers/updateUser')
);

module.exports = router;
