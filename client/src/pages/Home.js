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
      searched: false,
      searchedRestaurants: []
    }
  }

  handleClick = async (e) => {
    e.preventDefault()
    await this.setState({ searched: true })
    console.log(this.state.searched)
    console.log(this.state.searchedInput)
    const res = await axios.get(
      `http://localhost:3001/api/restaurants/search/${this.state.searchedInput}`
    )
    console.log(res.data)
    this.setState({ searchedRestaurants: res.data })
  }

  getRestaurants = async () => {
    const res = await axios.get(`http://localhost:3001/api/restaurants`)
    this.setState({ restaurants: res.data })
  }

  componentDidMount() {
    this.getRestaurants()
  }

  handleChange = async (e) => {
    await this.setState({ searchedInput: e.target.value })
    console.log(this.state.searchedInput)
    const res = await axios.get(`http://localhost:3001/api/restaurants`)
  }

  cartRedirect = async (e) => {
    await this.props.history.push(`/cart`)
    console.log(e.target)
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
          searchedRestaurants={this.state.searchedRestaurants}
        />
      </div>
    )
  }
}

export default Home
