const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('Home Page'))
router.get('/restaurants', controllers.getRestaurants)
// router.get('/categories' )

module.exports = router
