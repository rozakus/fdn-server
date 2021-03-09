const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.status(200).send('<h1>Welcome to Female Daily APIs<h1>'))

app.listen(PORT, () => console.log(`>>> Connected to PORT : ${PORT}`))