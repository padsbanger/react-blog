export default function(state = {posts: [], post: null}, action) {
  if(action.type === 'FETCH_POSTS') {
    return { posts:action.payload.data, post: action.post }
  }
  if(action.type === 'FETCH_POST') {
    return { posts:action.payload.data, post: action.post }
  }
  if(action.type === 'DELETE_POST') {
    return { posts:action.payload.data, post: null }
  }

  return state
}
