const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// router
const router = require('./routers/mainRouters')
app.get('/', (req, res) => res.status(200).send('<h1>Welcome to Female Daily Network APIs<h1>'))
app.use('', router)

app.listen(PORT, () => console.log(`>>> Connected to PORT : ${PORT}`))