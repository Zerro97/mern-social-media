import React, { Component, Fragment } from 'react'
import Post from '../components/PostBox'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  // Fetch post data
  componentDidMount() {
    /*axios.post(this.port + '/login', user)
        .then(res => console.log(res.data));

    this.setState({
        username: '',
        password: '',
    })*/
  }

  fetchPost() {
    let postArray = [];

    

    return postArray;
  }

  render() {
    return (
      <Fragment>
        <Post></Post>
      </Fragment>
    )
  }
}