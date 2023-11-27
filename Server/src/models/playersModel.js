const mongoose  = require('mongoose');

const playersSchema = new mongoose.Schema({
    playerName : {
        type : String,
        required : true
    },
    teamCode : {
        type : Date,
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
    }
})

module.exports = mongoose.model('playersList', playersSchema)