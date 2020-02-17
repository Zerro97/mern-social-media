const router = require('express').Router();
const { getObjects } = require('../s3api.js');
const {checkToken, addBucketName} = require('../middleware');
const {aws_secret_key, aws_user_key, aws_bucket_name} = require('../config');
const fs = require('fs');

/**
 * GET
 * Returns array of images & description. For image, probably will return url to image link
 * 
 * Req: Token
 * Res: Array of images & description.
 */
router.route('/').get((req, res) => {

});

/**
 * POST
 * Create a new reimbursement (images & description).
 * 
 * Req: Token, Image URL, Description
 * Res: Message indicating if it succeeded or not
 */
router.route('/').post((req, res) => {

});

/**
 * PUT
 * Retrieve image from s3
 * 
 * Req: Image URL
 * Res: Message indicating if it succeeded or not
 */
router.route('/').put(addBucketName, getObjects, (req, res) => {

    fs.writeFile(__dirname + '/../client/src/assets/images/' + req.body.image, req.body.content, { flag: 'wx' }, function(err){
        if(err) {
            console.log(err.code, "-", err.message);
        }
    });
});


//**** Individual Ids ****//
// Individual ids can be found in req.params.id

/**
 * GET
 * Returns a specific images & description.
 * 
 * Req: Token
 * Res: Announcement mongoose model
 */
router.route('/:id').get((req, res) => {

});

/**
 * PUT
 * Update a specific images & description.
 * 
 * Req: Token & Updated announcement information
 * Res: Message indicating if it succeeded or not
 */
router.route('/:id').put((req, res) => {

});

/**
 * DELETE
 * Delete an instance of reimbursement model
 * 
 * Req: Token
 * Res: Message indicating if it succeeded or not
 */
router.route('/:id').delete((req, res) => {

});


module.exports = router;

// Previous attempt on s3 file upload
/*try{
    const reimbursement = Reimbursement.findById(req.params.id);

    // Error Checking
    if(!reimbursement){
        return res.status(404).json({msg: "Reimbursement not found"});
    };
    if(!req.files){
        return res.status(400).json({msg: "Please upload a file"});
    };

    const file = req.files.file;

    // Upload file to AWS S3
    const BUCKET_NAME = 'mern-blog-bucket';
    const IAM_USER_KEY = config.iam_user_key;
    const IAM_USER_SECRET = config.iam_secret_key;

    let bucket = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,
        Bucket: BUCKET_NAME
    });

    var params = {
        Bucket: BUCKET_NAME,
        Key: file.name,
        Body: file.data
    };
    bucket.upload(params, function (err, data) {
        if (err) {
            console.log('error in callback');
            console.log(err);
        }
        console.log('success');
        console.log(data);
    });

    // Store the information in database
    let newReimbursement = new Reimbursement({
        username: req.body.username, 
        title: req.body.title,
        description: req.body.description,
        photo: req.body.photo, 
        date: req.body.date,
    });

    newReimbursement.save();
    res.status(200).send({msg: "Successfully created reimbursement."})

} catch(err){
    console.log("ERROR in reimbursement route: post request." + err);
}*/

//**** S3 Configuration ****/
/*
// Set the region 
AWS.config.update({region: 'us-east-2'});

// Create S3 service object
let s3 = new AWS.S3({
    accessKeyId: aws_user_key,
    secretAccessKey: aws_secret_key,
});
*/

//**** Multer Configuration ****/
/*
let upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: aws_bucket_name,
        key: function (req, file, cb) {
            console.log(file);
            // Date.now() guarantees that file is unique
            cb(null, path.basename(file.originalname, path.extname(file.originalname)) + Date.now() + path.extname(file.originalname));
        }
    }),
    limits:{ fileSize: 2000000 },  // 2MB
    fileFilter: function( req, file, cb ){
		checkFileType( file, cb );
	}
});

// Only allows image file types
function checkFileType( file, cb ){
	// Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
	// Check ext
	const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
	// Check mime
	const mimetype = filetypes.test( file.mimetype );
	if( mimetype && extname ){
		return cb( null, true );
	} else {
		cb( 'Error: Images Only!' );
	}
}
*/