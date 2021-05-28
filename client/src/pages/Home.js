import React, { Component } from 'react'
import axios from 'axios'
import RestaurantCard from '../components/RestaurantCard'
import Header from '../components/Header'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      restaurants: [],
      searchedInput: '',
      searched: false
    }
  }

  handleClick = async (e) => {
    await this.setState({ searched: true })
    console.log(this.state.searched)
    console.log('hi')
  }

  getRestaurants = async () => {
    const res = await axios.get(`http://localhost:3001/api/restaurants`)
    this.setState({ restaurants: res.data })
  }

  componentDidMount() {
    this.getRestaurants()
  }

  handleChange = (e) => {
    this.setState({ searchedInput: e.target.value })
    console.log(this.state.searchedInput)
  }

  cartRedirect = (e) => {
    this.props.history.push(`/cart`)
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img
            className="logo-image"
            src="https://cdn.dribbble.com/users/1415308/screenshots/3656877/doggy_animation.gif"
          ></img>
          <span>scooter eats</span>
        </div>
        <Header
          {...this.props}
          {...this.state}
          handleClick={this.handleClick}
          handleChange={this.handleChange}
        />
        <RestaurantCard
          cartRedirect={this.cartRedirect}
          restaurants={this.state.restaurants}
          searchedInput={this.state.searchedInput}
          searched={this.state.searched}
        />
      </div>
    )
  }
}

export default Home
