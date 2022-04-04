const express = require('express');
const pool = require('./db/database');
const routers = require('./routes/router');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
const multer = require('multer');
const router = require('./routes/router');
const path = require('path');
const upload =multer()


app.set('public', path.join(__dirname, 'public'));
app.set('public engine', 'html')



// for parsing multipart/form-data

router.use(upload.array());  
router.use(express.static(path.join(__dirname,"./public")));

// to support JSON-encoded bodies

app.use( bodyParser.json() );

// for parsing application/x-www-form-urlencoded 

app.use(bodyParser.urlencoded({    
  extended : true
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