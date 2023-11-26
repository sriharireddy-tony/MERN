const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');


router.post('/auth/signUp', authController.register);
router.post('/auth/signIn', authController.login);

module.exports = router;