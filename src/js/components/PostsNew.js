import React, { Component, PropTypes } from 'react'
import {reduxForm} from 'redux-form'

import { createPost } from '../actions/index'

class PostsNew extends Component {

  constructor(props, context){
    super(props);
    context.router
  }

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        this.context.router.push('/')
       })
  }

  render() {
    const { fields: {title, categories, content}, handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>New post</h3>
        <fieldset>
          <label>Title</label>
          <input type="text"  {...title} />
          <p>{title.touched ?  title.error: ''}</p>
        </fieldset>
        <fieldset>
          <label>Catergories</label>
          <input type="text" {...categories}/>
            <p>{categories.touched ?  categories.error: ''}</p>
        </fieldset>
        <fieldset>
          <label>Content</label>
          <textarea {...content} />
            <p>{content.touched ?  content.error: ''}</p>
        </fieldset>
        <button type="submit">Submit</button>
    </form>
    )
  }
}

PostsNew.contextTypes = {
    router: React.PropTypes.object

  }

function validate(values) {
  const errors = {}

  if(!values.title) {
    errors.title = 'Enter a username'
  }

  if(!values.categories) {
    errors.categories = 'Enter catergories'
  }
  if(!values.content) {
    errors.content = 'Enter some content'
  }

  return errors
}

export default reduxForm({
  form: 'PostNew',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew)
