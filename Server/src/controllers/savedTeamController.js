const saveTeamModel = require('../models/savedTeamsModel');
const successHandler = require('../middlewares/successHandler');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const saveTeam = async (req, res, next) => {
    await saveTeamModel.create(req.body).then((savedTeam) => {
        successHandler(200, 'Team Saved Successfully', savedTeam)(req, res)
    }).catch((err) => {
        next(err);
    })
}

const getSavedTeams = async (req, res, next) => {
    try {
        const query = req.query;
        console.log(query);

        const aggrePipeline = [
            {
                $lookup: {
                    from: "playerslists",
                    localField: "matchModelId",
                    foreignField: "matchModelId",
                    as: "playersList",
                }
            },
            {
                $match: {
                    matchModelId: new ObjectId(query.matchModelId)
                }
            },
            {
                $match: {
                    userId: query.userId
                }
            }
        ];

        const response = await saveTeamModel.aggregate(aggrePipeline).exec();
       successHandler(200, 'Saved Teams Getting Successfull', response)(req, res)
    } catch (err) {
        next();
    }
}

module.exports = {
    saveTeam,
    getSavedTeams
}