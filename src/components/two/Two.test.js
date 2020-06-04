/* eslint-disable no-unused-vars */
/*global it*/

import React from 'react'
import ReactDOM from 'react-dom'
import Two from './Two'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Two />, div)
  ReactDOM.unmountComponentAtNode(div)
})
