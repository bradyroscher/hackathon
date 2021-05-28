import React, { Component } from 'react'

export default class RestaurantCard extends Component {
  render() {
    const {
      restaurants,
      searchedInput,
      searched,
      cartRedirect,
      searchedRestaurants
    } = this.props
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
          <div
            onClick={cartRedirect}
            key={searchedRestaurants._id}
            className="restaurant-container"
          >
            <div className="restaurant-text">
              <h1>{searchedRestaurants.name}</h1>
              <img
                className="restaurant-image"
                src={searchedRestaurants.img}
              ></img>
              <br />
              <h3>
                {searchedRestaurants.rating} || {searchedRestaurants.distance}{' '}
                {searchedRestaurants.category}
              </h3>
            </div>
          </div>
        )}
      </div>
    )
  }
}
