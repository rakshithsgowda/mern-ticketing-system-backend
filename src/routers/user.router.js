const express = require('express')
const router = express.Router()

const { insertUser } = require('../model/user/User.model')
const { hashPassword } = require('../helpers/bcrypt.helper')

router.all('/', (req, res, next) => {
  // console.log(name)
  // res.json({ message: 'return from user router' })
  next()
})

router.post('/', async (req, res) => {
  const { name, company, address, phone, email, password } = req.body

  try {
    // hashpassword
    const hashedPass = await hashPassword(password)

    const newUserObject = {
      name,
      company,
      address,
      phone,
      email,
      password: hashedPass,
    }

    const result = await insertUser(newUserObject)
    console.log(result)
    res.json({ message: 'New user created ', result })
  } catch (error) {
    console.log(error)
    res.json({ status: 'error', message: error.message })
  }
})

module.exports = router
