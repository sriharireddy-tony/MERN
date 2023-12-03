const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');


router.post('/signUp', authController.register);
router.post('/signIn', authController.login);

module.exports = router;