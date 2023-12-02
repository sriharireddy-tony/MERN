const express = require('express');
const router = express.Router();


const matchesController = require('../controllers/matchesController.js');

router.post('/createMatch', matchesController.createMatch);
router.get('/getMatchList', matchesController.getMatchList);
router.delete('/deleteMatch/:_id',matchesController.deleteMatch);


module.exports = router;