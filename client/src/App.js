import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import ConfirmPage from './components/ConfirmPage'
import Cart from './pages/Cart'
import Form from './pages/Form'
import { withRouter } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedRestaurant: null
    }
  }

  cartRedirect = (restaurant) => {
    this.setState({ selectedRestaurant: restaurant })
    this.props.history.push(`/cart/${restaurant.name}`)
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={(reactRouterProps) => (
              <Home {...reactRouterProps} cartRedirect={this.cartRedirect} />
            )}
          />
          <Route path="/confirm" component={ConfirmPage} />
          <Route
            path="/cart/:id"
            component={(reactRouterProps) => (
              <Cart
                {...reactRouterProps}
                selectedRestaurant={this.state.selectedRestaurant}
              />
            )}
          />
          <Route path="/add" component={Form} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
