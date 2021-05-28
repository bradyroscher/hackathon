const db = require('../db')
const Restaurant = require('../models/restaurant')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const restaurants = [
    {
      name: 'Mcdonalds',
      distance: '1.2 miles',
      category: 'Burgers',
      rating: '3.2 Stars',
      menuItem1: { name: 'Big Mac', price: '$5.00' },
      menuItem2: { name: 'McChicken', price: '$1.00' },
      menuItem3: { name: '10pc McNuggets', price: '$4.00' }
    },
    {
      name: 'PokeBowl',
      distance: '2.5 miles',
      category: 'Asian',
      rating: '4.8 Stars',
      menuItem1: { name: 'Rainbow Bowl', price: '$15.00' },
      menuItem2: { name: 'Volacano Bowl', price: '$15.00' },
      menuItem3: { name: 'Sushi Burrito', price: '$14.00' }
    }
    //   { name:
    //     distance:
    //     category:
    //     rating: ,
    //     menuItem1: {}
    //     menuItem2: {}
    //     menuItem3: {}
    // },
  ]

  await Restaurant.insertMany(restaurants)
  console.log('Created some restaurantss!')
}
const run = async () => {
  await main()
  db.close()
}

run()
