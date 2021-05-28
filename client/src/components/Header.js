import React, { Component } from 'react'
import axios from 'axios'

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <form>
            <input
              className="home-input"
              type="text"
              placeholder="tell us what you're craving"
              onChange={this.props.handleChange}
            ></input>
            <button className="submit-btn" onClick={this.props.handleClick}>
              scoot
            </button>
          </form>
        </nav>
      </header>
    )
  }
}
