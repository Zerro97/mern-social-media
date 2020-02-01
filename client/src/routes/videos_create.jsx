import React, { Component, Fragment } from 'react';
import axios from 'axios';
import {port, aws_bucket_name} from '../config';

export default class VideosCreateRoute extends Component {
  constructor(props) {
    super(props);

    this.onChangeFile = this.onChangeFile.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      description: '',
      url: ''
    }
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeFile(e) {
    let fileReader = new FileReader();

    // Read the content from the selected file
    fileReader.readAsText(e.target.files[0]);

    // Once file is read, ....
    fileReader.onloadend = function(event) {
      /*this.setState({
        file: event.target.result
      })*/
    }
  }

  onSubmit(e) {
    e.preventDefault();

    let file = this.uploadInput.files[0];
    // Split the filename to get the name and type
    let fileParts = file.name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];

    const video = {
      title: this.state.title,
      description: this.state.description,
      fileName : fileName,
      fileType : fileType,
    }

    axios.post(port + '/videos', video)
    .then(response => {
      let returnData = response.data.data.returnData;
      let signedRequest = returnData.signedRequest;
      let url = returnData.url;

      this.setState({url: url})
      
      // Put the fileType in the headers for the upload
      var options = {
        headers: {
          'Content-Type': fileType,
        }
      };
      axios.put(signedRequest,file,options)
      .then(result => {
        this.setState({success: true});
      })
      .catch(error => {
        alert("ERROR " + JSON.stringify(error));
      })
    })
    .catch(error => {
      alert(JSON.stringify(error));
    })

    this.setState({
      title: '',
      description: '',
    })



    /*axios.post("http://localhost:3001/sign_s3",{
      fileName : fileName,
      fileType : fileType
    })
    */
  }

  render() {
    return (
      <Fragment>
        <div className="jumbotron">
          <h1 className="display-4 text-center">Create Video</h1>
          <p className="lead text-center">You can upload videos here!</p>
        </div>

        <div className="container mt-3">
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Title: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  />
            </div>
            <div className="form-group"> 
              <label>Description: </label>
              <input type="text"
                  required
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  />
            </div>

            <div className="form-group">
              <label>Upload Video: </label>
              <input type="file" onChange={this.onChangeFile} ref={(ref) => { this.uploadInput = ref; }}/>
            </div>

            <div className="form-group">
              <input type="submit" value="Create" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </Fragment>
    )
  }
}