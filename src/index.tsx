import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import App from './App'
import { index } from './modules'

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combineReducers({
    state: index,
  }),
  storeEnhancers(applyMiddleware(logger))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
