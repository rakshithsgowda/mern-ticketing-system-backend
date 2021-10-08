const express = require('express')
const router = express.Router()

const { insertUser } = require('../model/user/User.model')
const { hashPassword } = require('../helpers/bcrypt.helper')
const { json } = require('express')

router.all('/', async (req, res, next) => {
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

// user Sign in endpoint
router.post('/login', (req, res) => {
  console.log(req.body)
  const { email, password } = req.body

  // hash our password for the email entrered and compare this one wit the DB hashstored
  if (!email || !password) {
    return res.json({ status: 'error', message: 'Invalid form submittion' })
  }
  // get user with passwordd from DB

  res.json({ status: 'success', message: 'Login Successfully' })
})

module.exports = router
