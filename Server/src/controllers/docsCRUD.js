const uploadFile = require("../middlewares/upload");
const multer = require("multer");
const AWS = require("aws-sdk");
require("aws-sdk/lib/maintenance_mode_message").suppress = true;
require("dotenv").config();
const fs = require("fs");
const docModel = require("../models/docModel");
const successHandler = require("../middlewares/successHandler");

const uploadDocument = async (req, res) => {
  await uploadFile(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "Multer error: " + err.message });
    } else if (err) {
      return res.status(500).json({ error: "Internal server error" + err });
    }
    return res.status(200).json({ message: "File uploaded successfully" });
  });
};

const s3 = new AWS.S3({
  // region: process.env.REGION,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const uploadDocAWS = async (req, res, next) => {
  await uploadFile(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: "Multer error: " + err.message });
    } else if (err) {
      next();
    }
    const file = req.file;

    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: file.originalname,
      Body: file.filename,
      // ContentType: file.mimetype
    };

    s3.upload(params, async (err, data) => {
      if (err) {
        next();
      }
      fs.unlink(file.path, (err) => {
        if (err) {
          next();
        }
        const extension =
          file.originalname.split(".")[file.originalname.split(".").length - 1];
        const body = {
          AWSBucket: data.Bucket,
          docName: data.Key,
          docPath: data.Location,
          docType: file.mimetype,
          docExtension: extension,
          uploadedBy: "",
        };
        docModel
          .create(body)
          .then((response) => {
            successHandler(200,"Document uploaded successfully",response)(req, res);
          })
          .catch((err) => {
            next(err);
          });
      });
    });
  });
};

const getDocs = async (req, res, next) => {
  // var params = {  Bucket: 'your bucket', Key: 'your object' };

  s3.getObject(req.body, async (err, data) => {
    if (err) {
      next();
    }
    successHandler(200,"Document getting successfully",data)(req, res);
  });
};

const deleteDocAWS = async (req, res, next) => {
  // var params = {  Bucket: 'your bucket', Key: 'your object' };

  s3.deleteObject(req.body, async (err, data) => {
    if (err) {
      next();
    }
  });
};

module.exports = {
  uploadDocument,
  uploadDocAWS,
  deleteDocAWS,
  getDocs,
};
