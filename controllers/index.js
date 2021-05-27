const Restaurant = require('../models/restaurant')

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find()
    return res.status(200).json({ restaurants })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getRestaurants
}
