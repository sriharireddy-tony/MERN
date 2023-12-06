const uploadFile = require('../middlewares/upload');
const multer = require("multer");

const uploadDocument = async(req, res) => {
    // const storage = multer.diskStorage({
    //     destination: (req, file, cb) => {
    //       cb(null, "./uploads")
    //     },
    //     filename: (req, file, cb) => {
    //       cb(null, Date.now() + "-" + file.originalname)
    //     },
    //   })

    //   const uploadStorage = multer({ storage});


    // await uploadStorage.single("file"), (req, res) => {
    //     console.log(req.file)
    //     return res.send("Single file")
    //   }
      

    await uploadFile(req, res, function(err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: 'Multer error: ' + err.message });
      } else if (err) {
        return res.status(500).json({ error: 'Internal server error' + err});
      }
      return res.status(200).json({ message: 'File uploaded successfully' });
    });
  };

  module.exports = {
    uploadDocument
  };