const express = require('express');
const router = express.Router();
const verifyAccessToken = require('../middlewares/verifyAccessToken');


const matchesController = require('../controllers/matchesController.js');

router.post('/createMatch', verifyAccessToken, matchesController.createMatch);
router.get('/getMatchList', verifyAccessToken, matchesController.getMatchList);
router.delete('/deleteMatch/:_id', verifyAccessToken, matchesController.deleteMatch);


module.exports = router;