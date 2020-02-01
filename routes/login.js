const router = require('express').Router();
let User = require('../models/user.model');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let config = require('../config');
let midObj = require('../middleware');

/**
 * GET
 * Returns token for given username and password
 * 
 * Req: username & password
 * Res: token
 */
router.route('/').post((req, res) => {
    // Find the user from database
    User.findOne({ username: req.body.username }, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        
        // Compare the password sent with the database's password
        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        
        // If password matches, make token and send the token
        let token = jwt.sign({ id: user._id }, config.private_key, {
            expiresIn: 86400 // expires in 24 hours
        });
        
        res.status(200).send({ auth: true, token: token });
    });
});


module.exports = router;