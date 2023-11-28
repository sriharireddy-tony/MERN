const matchesModel = require("../models/matchesModel");

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
      const matches = await matchesMode.find();
      res.status(200).json({ message: 'Match list getting successfull', data: matches });
    } catch (error) {
    //   res.status(500).json({ message: 'Internal server error' });
    next(error);
    }
  };

module.exports = {
    createMatch,
    getMatchList
}