const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const {atlas_uri, node_env, port} = require('./config')

// Allows usage of environment varaibles (eg. process.env.PORT)
require('dotenv').config();


//* Express Set Up *//
const app = express();
// Allows other domains to make request to our webAPI
app.use(cors());
// Enable express to parse json
app.use(express.json());


//* MongoDB Database Set Up *//
const uri = atlas_uri;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})



//* Server Side Routes *//
const imagesRouter = require('./routes/images');
const videosRouter = require('./routes/videos');
const audiosRouter = require('./routes/audios');
const loginRouter = require('./routes/login');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

app.use('/images', imagesRouter);
app.use('/videos', videosRouter);
app.use('/audios', audiosRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);



//* Deploy *//
// Serve static assets if in production
if (node_env === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// Run the application on port variable
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});