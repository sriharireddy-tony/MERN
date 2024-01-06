const express = require('express');
const router = express.Router();


const playerController = require('../controllers/playersController');


router.post('/createPlayer', playerController.createPlayer);
router.get('/getPlayerByRefId/:refId', playerController.getPlayerByRefId);
router.delete('/deletePlayer/:_id', playerController.deletePlayer);
router.get('/getPlayers', playerController.getPlayers)


module.exports = router;