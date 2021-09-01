require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')

// port
const port = process.env.PORT || 8000

// API security
app.use(helmet())

// handle CORS error
app.use(cors())

// mongodb connection setup
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
if (process.env.NODE_ENV !== 'production') {
  // MONGO CONNECTION CHECK
  mongoose.connection.on('open', () => {
    console.log('MongoDB is connected')
  })
  mongoose.connection.on('error', (error) => {
    console.log(error)
  })
  // Logger
  app.use(morgan('tiny'))
}

// set body parser but remooved
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Load routers
const userRouter = require('./src/routers/user.router')
const ticketRouter = require('./src/routers/ticket.router')

//Use Routers
app.use('/v1/user', userRouter)
app.use('/v1/ticket', ticketRouter)

// Error handler
const handleError = require('./src/utils/errorHandler')

app.use('*', (req, res, next) => {
  const error = new Error('Resource you are looking for is not found')
  error.status = 404
  next(error)
})

app.use('*', (error, req, res, next) => {
  handleError(error, res)
})

app.listen(port, () => {
  console.log(`API is ready on http://localhost:${port} `)
})
