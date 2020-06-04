/* eslint-disable no-unused-vars */
/*global it*/

import React from 'react'
import ReactDOM from 'react-dom'
import One from './One'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<One />, div)
  ReactDOM.unmountComponentAtNode(div)
})
