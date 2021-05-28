import React, { Component } from 'react'
import axios from 'axios'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      searched: ''
    }
  }

  // handleChange = (e) => {
  //   this.setState({ searched: e.target.value })
  //   console.log(e.target.value)
  // }

  // findRestaurant = () => {
  //   this.props.history.push('/search')
  // }

  render() {
    return (
      <header>
        <nav>
          <form>
            <input
              type="text"
              placeholder="Search by restaurant or what you're craving"
              onChange={this.props.handleChange}
            ></input>
            <button onClick={this.props.findRestaurant}>Submit</button>
          </form>
        </nav>
      </header>
    )
  }
}
