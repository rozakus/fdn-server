const router = require('express').Router()
const MainCOntroller = require('../controllers/mainControllers')

router.get('/products', MainCOntroller.allProduct)
router.get('/orders', MainCOntroller.orderUser)
router.get('/pivots', MainCOntroller.pivot)

module.exports = router