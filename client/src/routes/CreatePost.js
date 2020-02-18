import React, { useState, useContext, useEffect, Fragment } from 'react'
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/pages/CreatePost.module.scss';
import { TokenContext } from '../contexts/TokenContext'
import { UserContext } from '../contexts/UserContext'

/**
 * Not including value to input forms as I can use state to store the value onChange
 * The value could be useful in removing text from input boxes but since I'm redirecting
 * after submit, there should be no need for value
 */
const CreatePost = () => {
  // Defining states
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [madePost, setMadePost] = useState(false);

  // Defining port
  const port = process.env.PORT || "http://localhost:5000";

  // Defining context
  const { token, tokenDispatch } = useContext(TokenContext);
  const { user, userDispatch } = useContext(UserContext);

  //componentDidMount
  useEffect(() => {
    // Make sure state is set to false every time component is mounted
    setMadePost(false);
  })

  // Redirect to home if not logged in or if post is made
  const renderRedirect = () => {
    if (madePost || token == null) {
      return <Redirect to='/' />
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Split image name, ex. dog.png => dog & png
    let fileParts = file.name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];

    // author is _id of current logged in user
    const post = {
      title: title,
      description: description,
      author: user,
      fileName: fileName,
      fileType: fileType,
      fileParts: fileParts,
    }

    // Check if the user is logged in
    const config = {
      headers: {
        'x-access-token': token,
      }
    }

    // POST request to posts route
    axios.post(port + '/posts', post, config)
      .then(function(res){
        let returnData = res.data.data.returnData;
        let signedRequest = returnData.signedRequest;

        // Put the fileType in the headers for the upload to S3
        var options = {
          headers: {
            'Content-Type': fileType,
          }
        };

        // Store the file in the S3
        axios.put(signedRequest,file,options)
          .then(result => {
            setMadePost(true);
          })
          .catch(err => {
            console.log("Error at client routes CreatePost. Error during PUT request to S3 signed route", err);
          })

        const imageData = {
          image: fileName + "." + fileType,
          key: fileName,
        }

        // Download the file from the S3 and store it in images folder
        axios.put(port + '/images', imageData)
          .then(function(res){
            console.log("Downloaded image from S3 to images folder")
          })
          .catch(function(err){
            console.log("Error at client route CreatePost. Error during PUT request to images route", err);
          })

      })
      .catch(function(err){
        console.log("Error at client route CreatePost. Error during POST request to posts route", err);
      })
        
      setTitle('');
      setDescription('');
      setFile(null);
  }

  return (
    <Fragment>
      {renderRedirect()}

      <div className="jumbotron">
        <h1 className="display-4">Create Post</h1>
        <p className="lead">
          You can make post here!<br/>
        </p>
      </div>
      <div className="container mt-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group"> 
            <label>Title: </label>
            <input  type="text"
                required
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
                />
          </div>
          <div className="form-group"> 
            <label>Description: </label>
            <textarea 
                required
                rows="15"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
                />
          </div>
          <div className="form-group">
            <label>Upload Header Image: </label>
            <input 
                required
                type="file" 
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
                />
          </div>

          <div className="form-group">
            <input type="submit" value="Make Post" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default CreatePost;