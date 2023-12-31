const mongoose = require('mongoose');

const savedSchema = new mongoose.Schema({
players: {
    type : String,
    required : true
},
// player2: {
//     type : String,
//     required : true
// },
// player3: {
//     type : String,
//     required : true
// },
// player4: {
//     type : String,
//     required : true
// },
// player5: {
//     type : String,
//     required : true
// },
// player6: {
//     type : String,
//     required : true
// },
// player7: {
//     type : String,
//     required : true
// },
// player8: {
//     type : String,
//     required : true
// },
// player9: {
//     type : String,
//     required : true
// },
// player10: {
//     type : String,
//     required : true
// },
// player11: {
//     type : String,
//     required : true
// },
createdBy: {
    type : String,
    required : true
},
createdOn: {
    type : String,
    required : true
},
userId: {
    type : String,
    required : true
},
matchModelId: { type: mongoose.Schema.Types.ObjectId, ref: 'matchesList' }
});

module.exports = mongoose.model('savedTeams', savedSchema);