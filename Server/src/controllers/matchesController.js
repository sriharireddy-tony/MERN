const matchesModel = require("../models/matchesModel");
const SuccessHandler = require("../middlewares/successHandler");

createMatch = async(req,res)=>{
    try{
        await matchesModel.create(req.body).then(matchesRes => {
           return res.status(201).json({message: 'Match added successfully', data: matchesRes });
        }).catch(err => {
            res.status(500).json({ message: 'Match added failed!' });
        });
    } catch(err){
        res.status(500).json({ message: 'Internal server error' });
    }  
}

getMatchList = async (req, res, next) => {
    try {
      const matches = await matchesModel.find();
      SuccessHandler(200,'Data getting successfull',matches)(req,res);
      res.status(200).json({ message: 'Match list getting successfull', data: matches });
    } catch (error) {
    next(error);
    }
  };

module.exports = {
    createMatch,
    getMatchList
}