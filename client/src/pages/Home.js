import React, { Component } from 'react'
import axios from 'axios'
import RestaurantCard from '../components/RestaurantCard'
import Header from '../components/Header'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      restaurants: [],
      searched: ''
    }
  }

  componentDidMount() {
    this.getRestaurants()
  }

  getRestaurants = async () => {
    const res = await axios.get(`http://localhost:3001/api/restaurants`)
    this.setState({ restaurants: res.data })
  }

  handleChange = (e) => {
    this.setState({ searched: e.target.value })
    console.log(this.state.searched)
  }

  findRestaurant = async () => {
    const res = await axios.get(
      `http://localhost:3001/api/restaurants/search/${this.state.searched}`
    )
    console.log(res)
  }

  render() {
    return (
      <div>
        <Header
          {...this.props}
          {...this.state}
          findRestaurant={this.findRestaurant}
          handleChange={this.handleChange}
        />

        <RestaurantCard restaurants={this.state.restaurants} />
      </div>
    )
  }
}

export default Home
