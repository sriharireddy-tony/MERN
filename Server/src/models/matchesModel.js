const mongoose = require('mongoose');

const matchesSchema = new mongoose.Schema({
    teamName1: {
        type: String,
        required: true
    },
    teamName2: {
        type: String,
        required: true
    },
    teamCode1: {
        type: String,
        required: true
    },
    teamCode2: {
        type: String,
        required: true
    },
    teamImage1: {
        type: String
    },
    teamImage2: {
        type: String
    },
    leagueName: {
        type: String,
        required: true
    },
    matchStartTime: {
        type: String,
        required: true
    },
    sportName: {
        type: String,
        required: true
    },
    isLineupsOut: {
        type: String,
    },
    createdBy: {
        type: String
    },
    createdOn: {
        type: Date,
        default: new Date()
    },
    // refToContestsModel: { type: mongoose.Schema.Types.ObjectId, ref: 'contestsList' },
    // refToPlayersModel: { type: mongoose.Schema.Types.ObjectId, ref: 'playersList' }
})

module.exports = mongoose.model('matchesList', matchesSchema)