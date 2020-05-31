/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { mount, route } from 'navi'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Menu from './components/menu/Menu'
import One from './components/one/One'
import Two from './components/two/Two'
import store from './app/store'
import { Provider } from 'react-redux'
import { Router, View } from 'react-navi'

const routes = mount({
  '/': route({
    title: 'App',
    // getData: () => api.fetchProducts(),
    view: <App />,
  }),
  '/one': route({
    title: 'One',
    // getData: () => api.fetchProducts(),
    view: <One />,
  }),
  '/two': route({
    title: 'Two',
    view: <Two />,
  }),
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router routes={routes}>
        <Menu />
        <Suspense fallback={null}>
          <View />
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
