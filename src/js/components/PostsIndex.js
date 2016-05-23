import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/index'
import { Link } from 'react-router'

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li key={post.id}>
          <Link to={'/posts/'+post.id}>{post.title}</Link>
        </li>
      )
    })
  }

  render() {
      return (
        <div>
          <Link to="/posts/new">Add new post </Link>
          <h3>Posts </h3>
          <ul>
            {this.renderPosts()}
          </ul>
        </div>
      )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchPosts
  }, dispatch)
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex)
