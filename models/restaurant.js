const mongoose = require('mongoose')
const MenuItemSchema = require('./menuitem')
const Schema = mongoose.Schema

const Restaurant = new Schema({
  name: { type: String, required: true },
  distance: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: String, required: true }
  // menuItemsArray:
})
