import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './component/App'
import Constants from './Util/Constants'
import AppActions from './actions/AppActions';

const store = createStore(rootReducer, Constants.INITIAL_STATE)

// simulating a rest call
setTimeout(()=>{
  store.dispatch({
    type: AppActions.INIT_STATE, 
    state: {
      ...Constants.INITIAL_STATE,
      next_index:4,
      todos: [
        { id:0, details:'Test stored todo 1', status: Constants.STATUS_PENDING},
        { id:1, details:'Test stored todo 2', status: Constants.STATUS_COMPLETED},
        { id:2, details:'Test stored todo 3', status: Constants.STATUS_PENDING},
        { id:3, details:'Test stored todo 4', status: Constants.STATUS_PENDING},
      ]
    }
  })
}, 2000)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
