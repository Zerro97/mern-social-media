const router = require('express').Router();
const s3api = require('../s3api.js');
let midObj = require('../middleware');

const path = require('path');
const AWS = require("aws-sdk");
const multer = require('multer');
const multerS3 = require('multer-s3');
const {aws_secret_key, aws_user_key, aws_bucket_name} = require('../config');


/**
 * GET
 * Returns array of videos & description. Not sure how to implement video data... Probably will return URL to the video link
 * 
 * Req: Token
 * Res: Array of videos & description.
 */
router.route('/').get((req, res) => {

});

/**
 * POST
 * Create a new video.
 * 
 * Req: Token, Video URL, Description
 * Res: Message indicating if it succeeded or not
 */
router.route('/').post(midObj.addBucketName, (req, res) => {
    s3api.getSignedUrl(req,res);
});


//**** Individual Ids ****//
// Individual ids can be found in req.params.id

/**
 * GET
 * Returns a specific video & description.
 * 
 * Req: Token
 * Res: Sermon mongoose model
 */
router.route('/:id').get((req, res) => {

});

/**
 * PUT
 * Update a specific video & description.
 * 
 * Req: Token & Updated sermon information
 * Res: Message indicating if it succeeded or not
 */
router.route('/:id').put((req, res) => {

});

/**
 * DELETE
 * Delete an instance of sermon model
 * 
 * Req: Token
 * Res: Message indicating if it succeeded or not
 */
router.route('/:id').delete((req, res) => {

});


module.exports = router;