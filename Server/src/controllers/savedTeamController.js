const saveTeamModel = require('../models/savedTeamsModel');
const successHandler = require('../middlewares/successHandler');

const saveTeam = async(req,res,next)=>{
    await saveTeamModel.create(req.body).then((savedTeam)=> {
        successHandler(200,'Team Saved Successfully',savedTeam)(req,res)
    }).catch((err)=>{
        next(err);
    })
}

module.exports = {
    saveTeam
}