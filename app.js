const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const app = express()

// port
const port = process.env.PORT || 8000

// API security
app.use(helmet())

// handle CORS error
app.use(cors())

// Logger
app.use(morgan('tiny'))

// set body parser but remooved
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Load routers
const userRouter = require('./src/routers/user.router')

// Routers
app.use('/', (req, res, next) => {
  res.json({ message: 'hi there guys!' })
})

app.listen(port, () => {
  console.log(`API is ready on http://localhost:${port} `)
})
