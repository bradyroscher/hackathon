import React, { Component } from 'react'

export default class RestaurantCard extends Component {
  render() {
    const { restaurants, searchedInput, searched, cartRedirect } = this.props
    console.log(searchedInput)
    console.log(searched)

    return (
      <div className="main-container">
        {!searched ? (
          restaurants.map((restaurant) => (
            <div
              onClick={cartRedirect}
              key={restaurant._id}
              className="restaurant-container"
            >
              <div className="restaurant-text">
                <h1>{restaurant.name}</h1>
                <img className="restaurant-image" src={restaurant.img}></img>
                <br />
                <h3>
                  {restaurant.rating} || {restaurant.distance}{' '}
                  {restaurant.category}
                </h3>
              </div>
            </div>
          ))
        ) : (
          <div>Hello!</div>
        )}
      </div>
    )
  }
}
