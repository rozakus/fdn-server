const router = require('express').Router()
const MainCOntroller = require('../controllers/mainControllers')

router.get('/order', MainCOntroller.orderUser)
router.get('/pivot', MainCOntroller.pivot)

module.exports = router