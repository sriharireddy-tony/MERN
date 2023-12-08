const express = require('express');
const router = express.Router();


const docController = require('../controllers/docsCRUD');


router.post('/upload', docController.uploadDocument);
router.post('/uploadToAWS', docController.uploadDocAWS);
router.post('/deleteDocAWS', docController.deleteDocAWS);
router.post('/getDocs', docController.getDocs);

module.exports = router;