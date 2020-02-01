/**
 * JWT Web Token Explanation
 * token = jwt.sign(payload, privateKey, signOptions)
 * 
 * payload: data that is encrypted
 * privateKey: used in RSA encryption
 * signOptions: specify configuration such as expire time, issuer of token etc..
 */

const router = require('express').Router();
let User = require('../models/user.model');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let config = require('../config');
let midObj = require('../middleware');

/**
 * GET
 * This is only used for testing. Users shouldn't have access (make GET request) to other users information
 * 
 * Req: Nothing
 * Res: Array of users
 */
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

/**
 * POST
 * Create a new user. Passes username and password. 
 * Hash the password immediately and store it in database. 
 * Create token using the user id
 * Return token
 * 
 * Req: Username & password
 * Res: Return token
 */
router.route('/').post((req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  const username = req.body.username;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;

  const newUser = new User({
    username: username, 
    password: hashedPassword,
    firstname: firstname, 
    lastname: lastname, 
    email: email, 
  });

  newUser.save()
    .then(function(){
      var token = jwt.sign({ id: newUser._id }, config.private_key, {
        expiresIn: 86400 // expires in 24 hours
      });

      res.status(200).send({ auth: true, token: token });
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


//**** Individual Ids ****//
// Individual ids can be found in req.params.id

/**
 * GET (Individual)
 * Req: Token
 * Res: User mongoose model
 */
router.route('/:id').get((req, res) => {

});

/**
 * PUT (Individual)
 * Req: Token & Updated user information
 * Res: Message indicating if it succeeded or not
 */
router.route('/:id').put((req, res) => {
  
});

/**
 * DELETE (Individual)
 * Req: Token
 * Res: Message indicating if it succeeded or not
 */
router.route('/:id').delete((req, res) => {
  
});

module.exports = router;