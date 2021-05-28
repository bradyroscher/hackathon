const db = require('../db')
const Restaurant = require('../models/restaurant')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const restaurants = [
    {
      name: 'Mcdonalds',
      img: 'https://i.imgur.com/gLsuqM6.jpg',
      distance: '1.2 miles',
      category: 'Burgers',
      rating: '3.2 Stars',
      menuItem1: { name: 'Big Mac', price: '$5.00' },
      menuItem2: { name: 'McChicken', price: '$1.00' },
      menuItem3: { name: '10pc McNuggets', price: '$4.00' }
    },
    {
      name: 'PokeBowl',
      img: 'https://i.imgur.com/jlcNE4w.png',
      distance: '2.5 miles',
      category: 'Asian',
      rating: '4.8 Stars',
      menuItem1: { name: 'Rainbow Bowl', price: '$15.00' },
      menuItem2: { name: 'Volacano Bowl', price: '$15.00' },
      menuItem3: { name: 'Sushi Burrito', price: '$14.00' }
    },
    {
      name: "Nando's",
      img: 'https://i.imgur.com/cImVT0x.png',
      distance: '1.5 miles',
      category: 'Chicken',
      rating: '4.5 stars',
      menuItem1: { name: '1/2 Chicken', price: '$14.50' },
      menuItem2: { name: 'Chicken Skewers', price: '$13.00' },
      menuItem3: { name: 'Chicken Strip Bowl', price: '$12.00' }
    },
    {
      name: 'Jinya',
      img: 'https://i.imgur.com/Npwl1RT.jpg',
      distance: '3 miles',
      category: 'Asian',
      rating: '4.6 Stars',
      menuItem1: { name: 'Spicy Miso Ramen', price: '$14.00' },
      menuItem2: { name: 'Shoyu Ramen', price: '$14.00' },
      menuItem3: { name: 'Tonkotsu Ramen', price: '$14.00' }
    },
    {
      name: "Uncle Julio's",
      img: 'https://i.imgur.com/JbSm9DS.png',
      distance: '1 mile',
      category: 'Mexican',
      rating: '4 stars',
      menuItem1: { name: 'Steak Fajitas', price: '$25.00' },
      menuItem2: { name: 'Carne Asada', price: '$23.00' },
      menuItem3: { name: 'Chicken Enchiladas', price: '$18.00' }
    },
    {
      name: 'Popeyes',
      img: 'https://i.imgur.com/jlcNE4w.png',
      distance: '2.2 miles',
      category: 'Chicken',
      rating: '3.2 Stars',
      menuItem1: { name: '3 Piece Meal', price: '$8.50' },
      menuItem2: { name: '4 piece Meal', price: '$9.50' },
      menuItem3: { name: 'Chicken Sandwich', price: '$5.00' }
    },
    {
      name: 'Taco Bell',
      img: 'https://i.imgur.com/qJB4t2M.png',
      distance: '1.6 miles',
      category: 'Mexican',
      rating: '2.7 stars',
      menuItem1: { name: 'Crunchwrap Supreme', price: '$3.75' },
      menuItem2: { name: 'Doritos Locos Taco', price: '$1.99' },
      menuItem3: { name: 'Beef Chalupa', price: '$2.99' }
    },
    {
      name: 'Burger Shack',
      img: 'https://i.imgur.com/ElprvfG.png',
      distance: '4 miles',
      category: 'Burgers',
      rating: '4.1 stars',
      menuItem1: { name: 'Classic Burger', price: '$6.00' },
      menuItem2: { name: 'Chicken Sandwich', price: '$5.50' },
      menuItem3: { name: '10pc Wings', price: '$10.00' }
    },
    {
      name: 'Matsu Sushi',
      img: 'https://i.imgur.com/qpmPemI.jpg',
      distance: '5 miles',
      category: 'Asian',
      rating: '4.9 stars',
      menuItem1: { name: 'Spicy Tuna Roll', price: '$5.50' },
      menuItem2: { name: 'California Roll', price: '$4.50' },
      menuItem3: { name: 'Unagi Roll', price: '$5.00' }
    },
    {
      name: 'Chipotle',
      img: 'https://i.imgur.com/lqWuzpD.png',
      distance: '2.2 miles',
      category: 'Mexican',
      rating: '3.2 stars',
      menuItem1: { name: 'Burrito', price: '$7.50' },
      menuItem2: { name: 'Burrito Bowl', price: '$8.25' },
      menuItem3: { name: 'Quesadilla', price: '$7.25' }
    },
    {
      name: 'Subway',
      img: 'https://i.imgur.com/Vuzq9Hy.png',
      distance: '3.7 miles',
      category: 'Subs',
      rating: '2.1 Stars',
      menuItem1: { name: 'Italian Sub', price: '$5.00' },
      menuItem2: { name: 'Meatball Sub', price: '$5.00' },
      menuItem3: { name: 'Cheese Steak', price: '$5.00' }
    },
    {
      name: "Jersey Mike's",
      img: 'https://i.imgur.com/2hdJZ1o.png',
      distance: '2.6 miles',
      category: 'Subs',
      rating: '3.5 miles',
      menuItem1: { name: 'Italian Sub', price: '$7.50' },
      menuItem2: { name: 'Cheese Steak', price: '$7.50' },
      menuItem3: { name: 'Turkey Sub', price: '$7.00' }
    },
    {
      name: "Two Amigo's",
      img: 'https://i.imgur.com/PP6OwPz.png',
      distance: '6 miles',
      category: 'Mexican',
      rating: '0.5 stars',
      menuItem1: { name: 'Steak Fajitas', price: '$13.50' },
      menuItem2: { name: 'Chicken Quesadilla', price: '$11.00' },
      menuItem3: { name: 'Chimichanga', price: '$9.00' }
    },
    {
      name: 'King Pollo',
      img: 'https://i.imgur.com/mld1CVu.jpg',
      distance: '3.9 miles',
      category: 'Chicken',
      rating: '3.8 stars',
      menuItem1: { name: '1/2 Chicken', price: '$14.50' },
      menuItem2: { name: '1/4 Chicken', price: '$12.50' },
      menuItem3: { name: 'Yuca', price: '$4.50' }
    },
    {
      name: "Sanitini's",
      img: 'https://i.imgur.com/s6JxJrs.png',
      distance: '4.5 miles',
      category: 'Subs',
      rating: '4.3 stars',
      menuItem1: { name: 'Italian Sub', price: '$8.00' },
      menuItem2: { name: 'Cheese Steak', price: '$8.50' },
      menuItem3: { name: 'Large Pizza', price: '$16.00' }
    },
    {
      name: 'KFC',
      img: 'https://i.imgur.com/xTiwu7y.png',
      distance: '3.3 miles',
      category: 'Chicken',
      rating: '1.2 stars',
      menuItem1: { name: '4pc meal', price: '$9.00' },
      menuItem2: { name: '5pc Chicken Tenders', price: '$8.50' },
      menuItem3: { name: 'Chicken Sandwich', price: '$5.50' }
    },
    {
      name: 'Five Guys',
      img: 'https://i.imgur.com/ptx13nh.png',
      distance: '2.4 miles',
      category: 'Burgers',
      rating: '3.4 stars',
      menuItem1: { name: 'Double Burger', price: '$12.00' },
      menuItem2: { name: 'Hotdog', price: '$6.00' },
      menuItem3: { name: 'Milkshake', price: '$4.50' }
    }
  ]

  await Restaurant.insertMany(restaurants)
  console.log('Created some restaurantss!')
}
const run = async () => {
  await main()
  db.close()
}

run()
