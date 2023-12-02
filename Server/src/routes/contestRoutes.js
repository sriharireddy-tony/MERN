const express = require('express');
const router = express.Router();


const contestController = require('../controllers/contestsController');


router.post('/createContest', contestController.createContest);
router.get('/getContestByRefId/:refId', contestController.getContestByRefId);
router.delete('/deleteContest/:_id', contestController.deleteContest);


module.exports = router;