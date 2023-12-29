const savedTeamController = require('../controllers/savedTeamController');
const app = require('express');
const router = app.Router();

router.post('/saveTeam', savedTeamController.saveTeam)

module.exports = router;