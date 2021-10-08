const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    name: {
      type: String,
      maxlength: 50,
      required: true,
    },
    company: {
      type: String,
      maxlength: 50,
      required: true,
    },
    address: {
      type: String,
      maxlength: 150,
    },
    phone: {
      type: Number,
      maxlength: 11,
    },
    email: {
      type: String,
      maxlength: 50,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 8,
      maxlength: 100,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = {
  UserSchema: mongoose.model('User', UserSchema),
}
