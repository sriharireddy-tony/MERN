const multer = require("multer");
const maxSize = 10 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../Server/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

var upload = multer({
  storage : storage,
  limits: { fileSize: maxSize }
}).single('file'); 

module.exports = upload;