import React, { Component } from 'react'

export default class RestaurantCard extends Component {
  render() {
    const { restaurants } = this.props
    console.log(restaurants)
    return (
      <div className="restaurant-container">
        {restaurants.map((restaurant) => (
          <div key={restaurant._id}>
            <h1>{restaurant.name}</h1>
            <h2>{restaurant.category}</h2>
            <h3>{restaurant.distance}</h3>
            <h3>{restaurant.rating}</h3>
          </div>
        ))}
      </div>
    )
  }
}
