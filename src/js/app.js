import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import reducer from './state/reducer'

import RootView from './view/root'

const prevDataString = localStorage.NANAL_DATA
const prevData = prevDataString ? JSON.parse(prevDataString) : void 0

const store = createStore(reducer, prevData)

window.onbeforeunload = () => {
  localStorage.NANAL_DATA = JSON.stringify(store.getState())
}

export default () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={RootView} />
    </Router>
  </Provider>
)
