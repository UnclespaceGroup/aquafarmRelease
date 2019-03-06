import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import Main from 'pages/Main'
import store from './store/index'
import Page404 from './pages/Page404'
import HttpRedirect from 'react-https-redirect'
import MainMobile from 'pages/MainMobile'
import { isMobile } from 'react-device-detect'

const currentMain = isMobile ? MainMobile : Main

const App = () => {
  return (
    <HttpRedirect>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'} component={currentMain} />
            <Route path={'*'} component={Page404} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </HttpRedirect>
  )
}

export default App
