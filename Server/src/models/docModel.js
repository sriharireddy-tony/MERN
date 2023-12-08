const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
    AWSBucket: {
        type: String,
        required: true
      },
      docName: {
        type: String,
        required: true
      },
    docPath: {
        type: String,
        required: true
      },
      docType: {
        type: String
      },
      docExtension: {
        type: String
      },
      uploadedBy: {
        type: String
      },
      uploadedAt: {
        type: String,
        default : new Date()
      }
})

module.exports = mongoose.model('docsList', docSchema)