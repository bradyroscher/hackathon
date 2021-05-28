import React, { Component } from 'react'
import axios from 'axios'
import RestaurantCard from '../components/RestaurantCard'
import Header from '../components/Header'
import LoadingPage from '../components/LoadingPage'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      restaurants: []
    }
  }

  componentDidMount() {
    this.getRestaurants()
  }

  getRestaurants = async () => {
    const res = await axios.get(`http://localhost:3001/api/restaurants`)
    this.setState({ restaurants: res.data })
  }

  render() {
    return (
      <div>
        <Header />
        <RestaurantCard restaurants={this.state.restaurants} />
      </div>
    )
  }
}

export default Home
