import React, { Component } from 'react'
import axios from 'axios'

class Cart extends Component {
  confirmRedirect = () => {
    this.props.history.push(`/confirm`)
  }

  render() {
    console.log(this.props.selectedRestaurant)
    return (
      <body className="body">
        <div className="cart-div">
          <h1>Cart</h1>
          <form className="cart-form">
            <h2>{`Menu Item 1: ${this.props.selectedRestaurant.menuItem1.name}`}</h2>
            <h4>{`price: ${this.props.selectedRestaurant.menuItem1.price}`}</h4>
            <input
              className="quantity"
              type="text"
              placeholder="quantity"
            ></input>
            <h2>
              {`Menu Item 2: ${this.props.selectedRestaurant.menuItem2.name}`}
            </h2>
            <h4>{`price: ${this.props.selectedRestaurant.menuItem2.price}`}</h4>
            <input
              className="quantity"
              type="text"
              placeholder="quantity"
            ></input>
            <h2>{`Menu Item 3:${this.props.selectedRestaurant.menuItem3.name}`}</h2>
            <h4>{`price: ${this.props.selectedRestaurant.menuItem3.price}`}</h4>
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
