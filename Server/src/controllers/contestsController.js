const contestsModel = require("../models/contestsModel");
const SuccessHandler = require('../middlewares/successHandler');

createContest = async (req, res, next) => {
    await contestsModel.create(req.body).then(contestRes => {
        return SuccessHandler(200, 'Data saved successfully', contestRes)(req, res)
    }).catch(err => {
        next(err);
    })
}

getContests = async (req, res, next) => {
    try {
        const contestsList = await contestsModel.find();
        return SuccessHandler(200, 'Data getting successfully', contestsList)(req, res)
    } catch (err) {
        next(err);
    }
}

deleteContest = async (req, res, next) => {
    try {
        const id = req.params._id;
        const deletedContest = await contestsModel.findByIdAndDelete(id);

        if (deletedContest && deletedContest._id) {
           return SuccessHandler(200, 'Contest deleted successfull', [])(req, res);
        } else {
           return SuccessHandler(404, 'Contest not found!', [])(req, res);
        }
    } catch (err) {
        next(err);
    }
}

getContestByRefId = async(req,res,next) =>{
    try{
        const refId = req.params.refId;
        const contests = await contestsModel.find({matchModelId : refId})
            return SuccessHandler(200, 'Contests getting successfull', contests)(req, res);
    } catch(err){
        next(err);
    }
}

module.exports = {
    createContest,
    getContests,
    getContestByRefId,
    deleteContest

}