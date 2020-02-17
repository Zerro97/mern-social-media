let multer  = require('multer'),
    multerS3 = require('multer-s3'),
    fs = require('fs'),
    AWS = require('aws-sdk'),
    {aws_secret_key, aws_user_key, aws_bucket_name} = require('./config');

//**** S3 Configuration ****/
// Set the region 
AWS.config.update({region: 'us-east-2'});

// Create S3 service object
let s3 = new AWS.S3({
    accessKeyId: aws_user_key,
    secretAccessKey: aws_secret_key,
});

/**
 * Create bucket. Note: bucket name must be unique.
 * Doc: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#createBucket-property
 * Required params: bucket
 */
exports.createBucket = function (req, res) {
    let item = req.body;
    let params = { Bucket: item.bucketName };
    s3.createBucket(params, function (err, data) {
        if (err) {
            return res.send({ "error": err });
        }
        res.send({ data });
    });
}

/**
 * List all buckets owned by the authenticate sender of the request. Note: bucket name must be unique.
 * Doc: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listBuckets-property
 * Required params: none
 */
exports.listBuckets = function (req, res) {
    s3.listBuckets({}, function (err, data) {
        if (err) {
            return res.send({ "error": err });
        }
        res.send({ data });
    });
}

/**
 * Delete bucket.
 * Doc: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteBucket-property
 * Required params: bucket
 */
exports.deleteBucket = function (req, res) {
    let item = req.body;
    let params = { Bucket: item.bucketName };
    s3.deleteBucket(params, function (err, data) {
        if (err) {
            return res.send({ "error": err });
        }
        res.send({ data });
    });
}

/**
 * Delete bucket cors configuration.
 * Doc: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteBucketCors-property
 * Required params: bucket
 */
exports.deleteBucketCors = function (req, res) {
    let item = req.body;
    let params = { Bucket: item.bucketName };
    s3.deleteBucketCors(params, function (err, data) {
        if (err) {
            return res.send({ "error": err });
        }
        res.send({ data });
    });
}

/**
 * Retrieves objects from Amazon s3
 * Doc: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObject-property
 * Required params: bucket, key
 */
exports.getObjects = function (req, res, next) {
    let item = req.body;
    let params = { Bucket: item.bucketName, Key: item.key };

    s3.getObject(params, function (err, data) {
        if (err) {
            return res.send({ "error": err });
        } else {
            req.body.content = data.Body;
            next();
        }
    });
}

/**
 * Delete an object
 * Doc: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObject-property
 * Required params: bucket, key
 */
exports.deleteObject = function (req, res) {
    let item = req.body;
    let params = { Bucket: item.bucketName, Key: item.key };
    s3.deleteObjects(params, function (err, data) {
        if (err) {
            return res.send({ "error": err });
        }
        res.send({ data });
    });
}

/**
 * Make a request to the S3 API to get a signed URL which we can use to upload our file
 */
exports.getSignedUrl = function(req, res) {
    let item = req.body;
    let params = {
        Bucket: item.bucketName,
        Key: item.fileName,
        Expires: 500,
        ContentType: item.fileType,
        ACL: 'public-read'
    };

    s3.getSignedUrl('putObject', params, (err, data) => {
        if(err){
          console.log(err);
          res.json({success: false, error: err})
        }

        const returnData = {
            signedRequest: data,
            url: `https://${item.bucketName}.s3.amazonaws.com/${item.fileName}`
        };

        res.json({success:true, data:{returnData}});
    });    
}

/**
 * Cloud image uploader using multer-s3 
 * Required params: bucket (bucketName)
 */
exports.uploadFile = function (req, res) {
    let item = req.body;
    let params = { 
        ACL: 'public-read', 
        Body: fs.createReadStream(item.file), 
        Key: Date.now().toString(),
        ContentType: 'application/octet-stream'
    };

    s3.upload(params, function (err, data) {
        if (err) {
            return res.send({ "error": err });
        }
        res.send({ data });
    });
}

/*function uploadFile(req, res) {
    let item = req.body;
    let upload = multer({
        storage: multerS3({
            s3: s3,
            acl: 'public-read',
            bucket: aws_bucket_name,
            metadata: function (req, file, cb) {
                console.log(file);
                cb(null, { fieldName: file.fieldname });
            },
            key: function (req, file, cb) {
                
                cb(null, Date.now().toString())
            }
        }),
        limits:{ fileSize: 2000000000 },  // 2GB
    });
    
    return upload;
}*/

//**** Multer Configuration ****/
/*let upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: aws_bucket_name,
        key: function (req, file, cb) {
            console.log(file);
            // Date.now() guarantees that file is unique
            cb(null, path.basename(file.originalname, path.extname(file.originalname)) + Date.now() + path.extname(file.originalname));
        }
    }),
    limits:{ fileSize: 2000000000 },  // 2GB
    fileFilter: function( req, file, cb ){
		checkFileType( file, cb );
	}
});

// Only allows video file types
function checkFileType( file, cb ){
	// Allowed ext
    const filetypes = /webm|mpg|mp2|mpeg|mpe|mpv|ogg|mp4|m4p|m4v|avi|wmv|mov|qt|flv|swf/;
	// Check ext
	const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
	// Check mime
	const mimetype = filetypes.test( file.mimetype );
	if( mimetype && extname ){
		return cb( null, true );
	} else {
		cb( 'Error: Videos Only!' );
	}
}*/