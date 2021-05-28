// import React, { Component } from 'react'
// import axios from 'axios'

// class Form extends Component {
//   constructor() {
//     super()
//     this.state = {
//       newRestaurant: {},
//       name: '',
//       category: '',
//       menuItem1: {},
//       menuItem2: {},
//       menuItem3: {}
//     }
//   }

//   postRestaurants = async (res, req) => {
//     const res = await axios.post(`http://localhost:3001/api/restaurants`, {
//       name: this.state.name
//       img: '',
//       distance: '0.1 miles',
//       category: this.state.category,
//       rating: 'TBD',
//       menuItem1: {},
//       menuItem2: {},
//       menuItem3: {}
//     })
//   }

// handleChangeName = async (e) =>{
//   await this.setState({ name: e.target.value })
// }

// handleChangeName = async (e) =>{
//   await this.setState({ name: e.target.value })
// }

// handleChangeName = async (e) =>{
//   await this.setState({ name: e.target.value })
// }

// handleChangeName = async (e) =>{
//   await this.setState({ name: e.target.value })
// }

//   componentDidMount() {
//     this.postRestaurants()
//   }

//   render() {
//     return (
//       <div>
//         <form>
//           <TextInput
//             type="text"
//             value={this.state.name}
//             onChange={this.handleChange}
//             name={'name'}
//             placeholder={'name'}
//           />
//           <TextInput
//             type="text"
//             value={newBoat.name}
//             onChange={this.props.handleChange}
//             name={'name'}
//             placeholder={'name'}
//           />
//           <TextInput
//             type="text"
//             value={newBoat.name}
//             onChange={this.props.handleChange}
//             name={'name'}
//             placeholder={'name'}
//           />
//         </form>
//       </div>
//     )
//   }
// }

// export default Form
