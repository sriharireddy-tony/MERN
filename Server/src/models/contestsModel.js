const mongoose  = require('mongoose');

const contestsSchema = new mongoose.Schema({
    contestEntry : {
        type : Number,
        required : true
    },
    isDiscount : {
        type : Boolean,
        default : false
    },
    discountEntry : {
        type : Number
    },
    contestSize : {
        type : Number,
        default : true
    },
    contestFilledsize : {
        type : Number
    },
    firstPrize : {
        type : Number,
        required : true
    },
    contestWinPercentage : {
        type : Number
    },
    teamsUpto : {
        type : Number,
        required : true
    },
    createdBy : {
        type : String,
    },
    createdOn : {
        type : Date,
        default : new Date()
    },
    matchModelId: { type: mongoose.Schema.Types.ObjectId, ref: 'matchesList' }
})

module.exports = mongoose.model('contestsList', contestsSchema)