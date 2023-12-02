const matchesModel = require("../models/matchesModel");
const SuccessHandler = require("../middlewares/successHandler");

createMatch = async (req, res) => {
    await matchesModel.create(req.body).then(matchesRes => {
        SuccessHandler(200, 'Match added successfully', matchesRes)(req, res);
    }).catch(err => {
        next(err);
    });
}

getMatchList = async (req, res, next) => {
    try {
        const matches = await matchesModel.find();
        SuccessHandler(200, 'Data getting successfull', matches)(req, res);
    } catch (error) {
        next(error);
    }
};

deleteMatch = async (req, res, next) => {
    try {
        const id = req.params._id;
        const deletedMatch = await matchesModel.findByIdAndDelete(id);

        if (deletedMatch && deletedMatch._id) {
           return SuccessHandler(200, 'Match deleted successfull', [])(req, res);
        } else {
           return SuccessHandler(404, 'Match not found!', [])(req, res);
        }
    } catch (err) {
        next(err);
    }
}

module.exports = {
    createMatch,
    getMatchList,
    deleteMatch
}