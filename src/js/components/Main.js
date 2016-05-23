import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import routes from '../routes'

class Main extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
      return(
        <div>
          {this.props.children}
        </div>
      )
  }
}

export default Main
