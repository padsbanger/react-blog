import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Main from './components/Main'
import PostsIndex from './components/PostsIndex'
import PostsNew from './components/PostsNew'
import PostsShow from './components/PostsShow'

export default(
  <Route path="/" component={Main}>
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
)
