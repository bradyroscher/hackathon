const Restaurant = require('../models/restaurant')

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find()
    return res.status(200).json(restaurants)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const findRestaurants = async (req, res) => {
  try {
    const { name } = req.params
    const restaurant = await Restaurant.findOne({ name: name })
    if (!restaurant) {
      return res.status(404).send('Unable to find restaurant')
    }
    res.status(200).json(restaurant)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

// const addRestaurants

module.exports = {
  getRestaurants,
  findRestaurants
}
