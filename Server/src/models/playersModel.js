const mongoose  = require('mongoose');

const playersSchema = new mongoose.Schema({
    playerName : {
        type : String,
        required : true,
        unique : true
    },
    teamCode : {
        type : String,
        required : true
    },
    selectedPercent : {
        type : String
    },
    isPlayedLastMatch : {
        type : Boolean,
        default : true
    },
    Points : {
        type : Number,
        required : true
    },
    credits : {
        type : Number,
        required : true
    },
    role : {
        type : String,
        required : true
    },
    createdBy : {
        type : String,
    },
    createdOn : {
        type : Date,
        default : new Date()
    },
    contestModelId: { type: mongoose.Schema.Types.ObjectId, ref: 'contestsList' }
})

module.exports = mongoose.model('playersList', playersSchema)