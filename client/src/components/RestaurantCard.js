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

// name, distance, category, rating, menuItem1, menuItem2, menuItem3

/* <div className="img-wrapper">
<img alt="image" src={image} />
</div>
<div className="info-wrapper flex-col">
<h3>{name}</h3>
<p>{rating}</p>
</div> */
