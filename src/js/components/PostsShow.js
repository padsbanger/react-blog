import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'

import {fetchPost, deletePost} from '../actions/index'

class PostsShow extends Component {

  constructor(props, context){
    super(props);
    context.router
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id)
  }

  handleDelete() {
    this.props.deletePost(this.props.params.id)
    this.context.router.push('/')
  }

  render() {
    return (
      <div>
        Show post of id {this.props.params.id} <br />
      <Link to='/'>Home</Link>
      <button onClick={this.handleDelete.bind(this)}>Delete</button>
    </div>
    )
  }
}

PostsShow.contextTypes = {
    router: React.PropTypes.object
}

function mapStateToProps(state) {
  return {
    post: state.posts.post
  }
}



export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow)
