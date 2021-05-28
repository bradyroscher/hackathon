import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
        <NavLink className="add-your-own" to="/add">
          don't see what you're looking for? add your own restaurant
        </NavLink>
        <header>
          <nav>
            <form onSubmit={this.props.handleClick}>
              <input
                className="home-input"
                type="text"
                placeholder="tell us what you're craving"
                onChange={this.props.handleChange}
              ></input>
              <button className="submit-btn">scoot</button>
              <br />
            </form>
          </nav>
        </header>
      </div>
    )
  }
}
