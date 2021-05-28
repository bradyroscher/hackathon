import React, { Component } from 'react'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      searched: ''
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ searched: e.target.value })
  }

  render() {
    return (
      <header>
        <nav>
          <form>
            <input
              type="text"
              placeholder="Search by restaurant or what you're craving"
              onChange={this.handleChange}
            ></input>
          </form>
        </nav>
      </header>
    )
  }
}
