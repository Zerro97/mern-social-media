const router = require('express').Router();
const s3api = require('../s3api.js');
let {checkToken, addBucketName} = require('../middleware');
let Post = require('../models/post.model');

/**
 * GET
 * Returns array of audios & description. Probably will return URL to the audio link
 * 
 * Req: Token
 * Res: Array of audio & description.
 */
router.route('/').get((req, res) => {
    Post.find({}, function(err, posts){
		if(err) {
			console.log(err);
			console.log("Error in comment default route");
		} else {
			res.status(200).send(posts);
		}
	})
});

/**
 * POST
 * Create a new video.
 * 
 * Req: Token, Audio URL, Description
 * Res: Message indicating if it succeeded or not
 */
router.route('/').post(checkToken, addBucketName, (req, res) => {
    s3api.getSignedUrl(req,res);

    const title = req.body.title;
    const description = req.body.description;
    const fileParts = req.body.fileParts;
    const fileFullName = fileParts[0] + "." + fileParts[1];
  
    const newPost = new Post({
        title: title, 
        description: description,
        imageUrl: fileFullName,
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