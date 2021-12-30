const bcrypt = require('bcrypt')
const { reject } = require('bcrypt/promises')
const saltRounds = 10

const hashPassword = (plainPassword) => {
  return new Promise((resolve) => {
    resolve(bcrypt.hashSync(plainPassword, saltRounds))
  })
}

const comparePasswordWithHashPassword = (password, passwordFromDB) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordFromDB, function (err, result) {
      if (err) reject(err)
      resolve(result)
    })
  })
}

// async function comparePasswordWithHashPassword(password, passwordFromDB) {
//   const match = await bcrypt.compare(password, passwordFromDB)
//   if (match) {
//     return true
//   }
//   throw new Error('password not matching')
// }

module.exports = {
  hashPassword,
  comparePasswordWithHashPassword,
}
