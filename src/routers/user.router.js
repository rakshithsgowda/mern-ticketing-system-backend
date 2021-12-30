const express = require('express')
const router = express.Router()

const { insertUser, getUserByEmail } = require('../model/user/User.model')
const {
  hashPassword,
  comparePasswordWithHashPassword,
} = require('../helpers/bcrypt.helper')
const { json } = require('express')

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
router.all('/', async (req, res, next) => {
  // console.log(name)
  // res.json({ message: 'return from user router' })
  next()
})

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------------------
// user Sign in endpoint
// ---------------------------------------------------------------------------------------
router.post('/login', async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body

  if (!email || !password) {
    return res.json({ status: 'error', message: 'Invalid form submittion' })
  }

  // get user with password from DB which was hashed
  const user = await getUserByEmail(email)
  const passwordFromDB = user?._id ? user.password : null
  if (!passwordFromDB) {
    return res.json({
      status: 'error',
      message: 'sorry user details missing fro the database',
    })
  }

  // lets hash the incoming signin Password before comparing it with the one in the DB.

  const resultOfComparision = await comparePasswordWithHashPassword(
    password,
    passwordFromDB
  )
  // console.log(resultOfComparision)

  res.json({ status: 'success', message: 'Login Successfully' })
})

// ---------------------------------------------------------------------------------------
// user signin  Router
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
module.exports = router
