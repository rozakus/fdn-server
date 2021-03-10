const express = require('express')
const app = express()
const cors = require('cors')

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// router
const router = require('./routers/mainRouters')
app.get('/', (req, res) => res.status(200).send('<h1>Welcome to Female Daily Network APIs<h1>'))
app.use('', router)

module.exports = app