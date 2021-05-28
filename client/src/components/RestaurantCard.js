import React, { Component } from 'react'

export default class RestaurantCard extends Component {
  render() {
    const { restaurants } = this.props
    return (
      <div className="main-container">
        {restaurants.map((restaurant) => (
          <div key={restaurant._id} className="restaurant-container">
            <h1>{restaurant.name}</h1>
            <img className="restaurant-image" src={restaurant.img}></img>
            <h2>{restaurant.category}</h2>
            <h3>{restaurant.distance}</h3>
            <h3>{restaurant.rating}</h3>
          </div>
        ))}
      </div>
    )
  }
}
