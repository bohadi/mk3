import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'

import configureStore from './store/configureStore'
import initialState from './initialState'
//import './styles/style.scss'

let store = configureStore(initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
