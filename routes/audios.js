const router = require('express').Router();

/**
 * GET
 * Returns array of audios & description. Probably will return URL to the audio link
 * 
 * Req: Token
 * Res: Array of audio & description.
 */
router.route('/').get((req, res) => {

});

/**
 * POST
 * Create a new video.
 * 
 * Req: Token, Audio URL, Description
 * Res: Message indicating if it succeeded or not
 */
router.route('/').post((req, res) => {

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