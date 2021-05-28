import React, { Component } from 'react'
import axios from 'axios'

class Cart extends Component {
  confirmRedirect = () => {
    this.props.history.push(`/confirm`)
  }

  render() {
    return (
      <body className="body">
        <div className="cart-div">
          <h1>Cart</h1>
          <form className="cart-form">
            <h2>Menu Item 1:</h2>
            <input
              className="quantity"
              type="text"
              placeholder="quantity"
            ></input>
            <h2>Menu Item 2:</h2>
            <input
              className="quantity"
              type="text"
              placeholder="quantity"
            ></input>
            <h2>Menu Item 3:</h2>
            <input
              className="quantity"
              type="text"
              placeholder="quantity"
            ></input>
          </form>
          <br />
          <button className="cart-submit" onClick={this.confirmRedirect}>
            submit
          </button>
        </div>
      </body>
    )
  }
}

export default Cart
