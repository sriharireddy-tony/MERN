const uploadFile = require('../middlewares/upload');
const multer = require("multer");

const uploadDocument = (req, res) => {

    uploadFile(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: 'Multer error: ' + err.message });
      } else if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }
      return res.status(200).json({ message: 'File uploaded successfully' });
    });
  };

  module.exports = {
    uploadDocument
  };