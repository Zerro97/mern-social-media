import React from "react";

function buildFileSelector(){
  const fileSelector = document.createElement('input');
  fileSelector.setAttribute('type', 'file');
  fileSelector.setAttribute('multiple', 'multiple');
  return fileSelector;
}

class FileDialogue extends React.Component {
  componentDidMount(){
    this.fileSelector = buildFileSelector();
  }
  
  handleFileSelect = (e) => {
    e.preventDefault();
    this.fileSelector.click();
  }
  
  render(){
    return <a className="button" href="" onClick={this.handleFileSelect}>Select files</a>
  }
}



const noop = () => {};

const FileInput = ({ value, onChange = noop, ...rest }) => (
  <div>
    {Boolean(value.length) && (
      <div>Selected files: {value.map(f => f.name).join(", ")}</div>
    )}
    <label>
      Click to select some files...
      <input
        {...rest}
        style={{ display: "none" }}
        type="file"
        onChange={e => {
          onChange([...e.target.files]);
        }}
      />
    </label>
  </div>
);

export default FileInput;


function buildFileSelector(){
  const fileSelector = document.createElement('input');
  fileSelector.setAttribute('type', 'file');
  fileSelector.setAttribute('multiple', 'multiple');
  return fileSelector;
}

class FileDialogue extends React.Component {
  componentDidMount(){
    this.fileSelector = buildFileSelector();
  }
  
  handleFileSelect = (e) => {
    e.preventDefault();
    this.fileSelector.click();
  }
  
  render(){
    return <a className="button" href="" onClick={this.handleFileSelect}>Select files</a>
  }
}

/*
body {
  font-family: Tahoma, Geneva, sans-serif;
}

.button {
    background-color: #4CAF50;
    border: none;
    border-radius: 6px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
}
*/