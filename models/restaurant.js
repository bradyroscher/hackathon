const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Restaurant = new Schema({
  name: { type: String, required: true },
  distance: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: String, required: true },
  menuItem1: { type: Object, required: true },
  menuItem2: { type: Object, required: true },
  menuItem3: { type: Object, required: true }
})

module.exports = mongoose.model('restaurants', Restaurant)
