import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import SearchResults from './components/SearchResults'

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
        </Switch>
      </div>
    )
  }
}

export default App
