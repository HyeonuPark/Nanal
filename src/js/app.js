import React from 'react'
import {browserHistory, Router, Route, IndexRoute} from 'react-router'

import Root from './view/root.js'
import TimeTable from './view/timetable.js'
// import EditSchedule from './view/edit-schedule.js'

export default () => (
  <Router history={browserHistory}>
    <Route path='/' component={Root}>
      <IndexRoute component={TimeTable} />
      {/* <Route path='/schedule/:id' component={EditSchedule} /> */}
    </Route>
  </Router>
)
