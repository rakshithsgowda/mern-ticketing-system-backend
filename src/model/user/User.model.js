const { UserSchema } = require('./User.schema')

const insertUser = (userObj) => {
  return new Promise((resolve, reject) => {
    UserSchema(userObj)
      .save()
      .then((data) => resolve(data))
      .catch((error) => reject(error))
  })
}

// const insertUser = async (userObj) => {
//   const emailtyped = userObj.email
//   console.log(emailtyped)
//   const emailsStoredInDatabase = await UserSchema.findOne(emailtyped)
//   try {
//     if (emailsStoredInDatabase === emailtyped) {
//       return await UserSchema(userObj).save()
//     }
//   } catch (error) {
//     return error
//   }
// }

const getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    if (!email) return false
    UserSchema.findOne({ email }, (error, data) => {
      if (error) {
        console.log(error)
        resolve(error)
      }
      resolve(data)
    })
  })
}

module.exports = {
  insertUser,
  getUserByEmail,
}
