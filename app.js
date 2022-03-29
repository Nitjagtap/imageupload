const express = require('express');
const pool = require('./db/database');
const routers = require('./routes/router');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
const multer = require('multer');
const router = require('./routes/router');
const upload =multer()





// for parsing multipart/form-data

router.use(upload.array());  
router.use(express.static('public'));

// to support JSON-encoded bodies

app.use( express.json() );

// for parsing application/x-www-form-urlencoded 

app.use(express.urlencoded({    
  extended: false
})); 
app.use('/', routers)

pool.connect((err)=>{
 if(err) throw err
 else{
     console.log("connect with database")
 }

})




app.listen(PORT,()=>{
    console.log(`This app listening at : http://localhost:${PORT}`);

})