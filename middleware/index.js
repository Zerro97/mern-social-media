/**
 * Provides middleware functions. Middleware functions have access to request, response and next function.
 */

// All the functions are defined in the middlewareObj
var middlewareObj = {};

middlewareObj.addBucketName = function(req, res, next){
    req.body.bucketName = "mern-blog-bucket";
    next();
}

// Function that checks if the request has token in it
middlewareObj.checkToken = function(req, res, next){
    // Every request that requires login should include x-access-token in request header and provide token as its value
    let token = req.headers['x-access-token'];

    // If token is not provided
    if (!token) {
        return res.status(401).send({ 
            auth: false, 
            message: 'No token provided.' 
        });
    }
    
    // Verify the token (using private key)
    jwt.verify(token, config.private_key, function(err, decoded) {
        // If token is invalid or error occurs
        if (err) {
            return res.status(500).send({
                auth: false,
                message: 'Failed to authenticate token.'
            });
        }

        // If token is valid, move onto next function
        next();
    });
}

module.exports = middlewareObj;