const router = require('express').Router()
const MainCOntroller = require('../controllers/mainControllers')

router.get('/products', MainCOntroller.allProduct)
router.get('/orders', MainCOntroller.orderUser)
router.get('/pivots', MainCOntroller.pivot)
router.post('/login', MainCOntroller.login)

module.exports = router