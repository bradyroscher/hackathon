import React, { Component } from 'react'

class ConfirmPage extends Component {
  render() {
    return (
      <div className="confirmation">
        <h1 className="you-did-it">you did it!</h1>
        <h2>you ordered food AND reduced your carbon footprint.</h2>
        <img
          className="scooter"
          src="https://cdn.dribbble.com/users/1415308/screenshots/3656877/doggy_animation.gif"
        ></img>
        <h2>your scooter driver is on their way!</h2>
      </div>
    )
  }
}

export default ConfirmPage
