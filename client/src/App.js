import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import SearchResults from './components/SearchResults'
import ConfirmPage from './components/ConfirmPage'
import Cart from './pages/Cart'
import Form from './pages/Form'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={(reactRouterProps) => <Home {...reactRouterProps} />}
          />
          <Route
            path="/search"
            component={(reactRouterProps) => (
              <SearchResults {...reactRouterProps} />
            )}
          />
          <Route path="/confirm" component={ConfirmPage} />
          <Route
            path="/cart"
            component={(reactRouterProps) => <Cart {...reactRouterProps} />}
          />
          <Route path="/add" component={Form} />
        </Switch>
      </div>
    )
  }
}

export default App
