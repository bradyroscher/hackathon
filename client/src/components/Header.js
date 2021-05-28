import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
      </header>
    )
  }
}
