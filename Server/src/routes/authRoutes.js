const express = require('express');
const router = express.Router();
const verifyRefreshToken = require('../middlewares/verifyRefreshToken');

const authController = require('../controllers/authController');


router.post('/signUp', authController.register);
router.post('/signIn', authController.login);
router.post('/refreshToken', verifyRefreshToken, authController.refreshToken);

module.exports = router;