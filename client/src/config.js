/**
 * Exports different environment variables
 */
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    // S3
    aws_secret_key: process.env.AWS_SECRET_ACCESS_KEY,
    aws_user_key: process.env.AWS_ACCESS_KEY_ID,
    aws_bucket_name: process.env.AWS_BUCKET_NAME,
    // RSA token generation
    private_key: process.env.PRIVATE_KEY,
    public_key: process.env.PUBLIC_KEY,
    // MongoDB atlas
    atlas_uri: process.env.ATLAS_URI,
    // Production
    node_env: process.env.NODE_ENV,
    port: process.env.PORT || "http://localhost:5000",    
};