import {createStore} from 'redux'

import reducer from './reducer/root.js'

/* global localStorage */
/*
const prevDataString = localStorage.NANAL_DATA
const prevData = prevDataString ? JSON.parse(prevDataString) : void 0
*/

export const store = createStore(reducer)

window.onbeforeunload = () => {
  localStorage.NANAL_DATA = JSON.stringify(store.getState())
}
