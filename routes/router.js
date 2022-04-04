    
const express = require("express");
const multer = require("multer");
const path = require("path");
const read = require("../controllers/read");
const Topselling = require("../controllers/topselling");
const Upload = require("../controllers/upload");
const pool = require("../db/database");
const router = express.Router()




const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: 'public/images/', 
      filename: (req, file, cb) => {
          cb(null, file.fieldname + '_' + Date.now() 
             + path.extname(file.originalname))
            // file.fieldname is name of the field (image)
            // path.extname get the uploaded file extension
    }
});

const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg)$/)) { 
         // upload only png and jpg format
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
}) 


// For Single image upload
router.post('/uploadImage', imageUpload.single('image'),Upload.upload)

router.get('/image',Upload.image);

router.get('/topselling',Topselling.selling);


module.exports=router;

 