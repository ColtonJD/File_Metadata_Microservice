const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
/** Serving from the same express Server
No cors required */
app.use(express.static('./views'));
app.use(bodyParser.json());

app.get('/', (req, res, next) =>{
  
});

//Specify storage path and file naming convetion for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, './temp')
  }, 
  filename: (req, file, cb) =>{
    let datestamp = Date.now();
    //Split necessary to grab file extension. Multer ignores this by default
    cb(null, file.fieldname + '-' + datestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
  }
});

const upload = multer({
  storage: storage,
  //Limits multer to only upload .png, .jpg, and /jpeg. Remove fileFilter and cb if you wish to allow all file formats or change the conditional statement to include file types of preference to add new file types.
  fileFilter: function (req, file, cb) {

        // The function should call `cb` with a boolean
        // to indicate if the file should be accepted

        // To reject this file pass `false`, like so:
        if (file.mimetype === 'image/png'
            || file.mimetype === 'image/jpg'
            || file.mimetype === 'image/jpeg'
            || file.mimetype === 'image/gif') {
            console.log('Got file of type', file.mimetype);
            cb(null, true);
        }

        // To accept the file pass `true`, like so:
        cb(null, false);
        console.log('Got file of type', file.mimetype);

    }
}).single('file'); //Limits uploads to a single file at a time

//Path for uploading files
app.post('/upload', (req, res, next)=>{
  upload(req, res, (err) => {
    if(err){
      res.json({error_code:1, err_desc:err});
      return;
    }
      res.json({error_code:0, err_desc:null});
  });
});

app.listen(process.env.PORT | 3000, () =>{
  console.log('Listening on port 3000');
});