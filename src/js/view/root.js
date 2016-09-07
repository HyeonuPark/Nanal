import React from 'react'

import {cViewport} from 'src/css/root.css'

const RootView = ({children}) => (
  <div className={cViewport}>
    {children}
  </div>
)

RootView.propTypes = {
  children: React.PropTypes.element.isRequired,
}

export default RootView
