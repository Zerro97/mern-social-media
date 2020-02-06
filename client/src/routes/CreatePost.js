import React, { useState, useContext, Fragment } from 'react'
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/pages/CreatePost.module.scss';
import { TokenContext } from '../contexts/TokenContext'

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

  // Defining token context
  const { token, dispatch } = useContext(TokenContext);

  // Redirect after successful post
  const renderRedirect = () => {
    if (madePost) {
      return <Redirect to='/' />
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let fileParts = file.name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];

    const post = {
      title: title,
      description: description,
      fileName: fileName,
      fileType: fileType,
      fileParts: fileParts
    }

    const config = {
      headers: {
        'x-access-token': token,
      }
    }

    axios.post(port + '/posts', post, config)
      .then(function(res){
        let returnData = res.data.data.returnData;
        let signedRequest = returnData.signedRequest;
        let url = returnData.url;

        console.log("url", url);

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
          .catch(error => {
            alert("ERROR " + JSON.stringify(error));
          })
      })
      .catch(function(err){
        console.log("Error in post to post route", err);
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
          This is a social media web application built to practice MERN stack!<br/>
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
                rows="15"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
                />
          </div>
          <div className="form-group">
            <label>Upload Header Image: </label>
            <input 
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