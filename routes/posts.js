const router = require('express').Router();
const { getSignedUrl } = require('../s3api.js');
const {checkToken, addBucketName} = require('../middleware');
const Post = require('../models/post.model');


/**
 * GET
 * Returns array of post. Probably will return URL to the audio link
 * 
 * Req: Token
 * Res: Array of audio & description.
 */
router.route('/').get(addBucketName, (req, res) => {
    // Find the posts from the database
    Post.find({}, function(err, posts){
        if(err) {
            console.log(err);
            res.status(500).send("Error in finding post from the database")
        } else {
            res.status(200).send(posts);
        }
    });

    //fetchPost();
    //console.log(postArr);
    
    // Fetch the image for individual posts from the S3
    /*for(let i=0; i<postArr.length; i++) {
        req.body.key = postArr[i].imageUrl;
        getObjects(req,res);
    }*/


});

/**
 * POST
 * Create a new video.
 * 
 * Req: Token, Audio URL, Description
 * Res: Message indicating if it succeeded or not
 */
router.route('/').post(checkToken, addBucketName, (req, res) => {
    getSignedUrl(req,res);

    const title = req.body.title;
    const description = req.body.description;
    const file = req.body.fileParts[0] + '.' + req.body.fileParts[1];
    const fileName = req.body.fileName;
    const fileType = req.body.fileType;

    const newPost = new Post({
        title: title, 
        description: description,
        image: file,
        imageName: fileName,
        imageType: fileType,
    });

    newPost.save()
});


//**** Individual Ids ****//
// Individual ids can be found in req.params.id

/**
 * GET
 * Returns a specific audio & description.
 * 
 * Req: Token
 * Res: Audio mongoose model
 */
router.route('/:id').get((req, res) => {

});

/**
 * PUT
 * Update a specific audio & description.
 * 
 * Req: Token & Updated audio information
 * Res: Message indicating if it succeeded or not
 */
router.route('/:id').put((req, res) => {

});

/**
 * DELETE
 * Delete an instance of audio model
 * 
 * Req: Token
 * Res: Message indicating if it succeeded or not
 */
router.route('/:id').delete((req, res) => {

});


module.exports = router;