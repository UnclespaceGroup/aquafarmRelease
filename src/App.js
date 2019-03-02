import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import Main from 'pages/Main/Main'
import store from './store/index'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact to={'/'} component={Main} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
