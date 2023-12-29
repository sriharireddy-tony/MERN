const playersModel = require("../models/playersModel");
const SuccessHandler = require('../middlewares/successHandler');


createPlayer = async (req, res, next) => {
   const pName = req.body.playerName;
   const isPNameUnique = await playersModel.find({playerName : pName})
   if(isPNameUnique && isPNameUnique._id){
    return SuccessHandler(409, 'Player name already exists!', [])(req, res)
   }
    await playersModel.create(req.body).then(PlayerRes => {
        return SuccessHandler(200, 'Data saved successfully', PlayerRes)(req, res)
    }).catch(err => {
        next(err);
    })
}

getPlayers = async (req, res, next) => {
    try {
        const PlayersList = await playersModel.find();
        return SuccessHandler(200, 'Data getting successfully', PlayersList)(req, res)
    } catch (err) {
        next(err);
    }
}

deletePlayer = async (req, res, next) => {
    try {
        const id = req.params._id;
        const deletedPlayer = await playersModel.findByIdAndDelete(id);

        if (deletedPlayer && deletedPlayer._id) {
           return SuccessHandler(200, 'Player deleted successfull', [])(req, res);
        } else {
           return SuccessHandler(404, 'Player not found!', [])(req, res);
        }
    } catch (err) {
        next(err);
    }
}

getPlayerByRefId = async(req,res,next) =>{
    try{
        const refId = req.params.refId;
        const Players = await playersModel.find({matchModelId : refId})
            return SuccessHandler(200, 'Players getting successfull', Players)(req, res);
    } catch(err){
        next(err);
    }
}

module.exports = {
    createPlayer,
    getPlayers,
    getPlayerByRefId,
    deletePlayer
}