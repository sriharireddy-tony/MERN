const express = require('express');
const router = express.Router();


const docController = require('../controllers/docsCRUD');


router.post('/upload', docController.uploadDocument);

module.exports = router;