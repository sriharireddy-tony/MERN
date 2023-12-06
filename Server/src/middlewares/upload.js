const multer = require("multer");
const maxSize = 10 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../assets/docs/");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, Date.now() + '-' + file.originalname);
  },
});

var upload = multer({  
    storage: storage, 
    limits: { fileSize: maxSize }, 

}); 

module.exports = upload;