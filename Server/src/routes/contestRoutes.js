const express = require('express');
const router = express.Router();


const contestController = require('../controllers/contestsController');


router.post('/createContest', contestController.createContest);
router.get('/getContestByRefId/:_id', contestController.getContestByRefId);
router.delete('/deleteContest/:_id', contestController.deleteContest);
router.get('/getContests', contestController.getContests);


module.exports = router;