const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MenuItem = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true }
})
