import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'

import rootReducer from './reducers/index';
import routes from './routes'

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
 ,
  document.getElementById('app')
)
