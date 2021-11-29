const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Data to be stored: 
// - First and last names 
// - Usernames
// - Emails
// - Phone numbers
// - City, State & Zip location
// - User’s liked items
// - User’s followed hashtags
// - User’s search history
// - Chat history (*)
// - User’s active listings
// - User’s archived listings

const User = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true }
    // firstname: { type: String, required: true },
    // lastname: { type: String, required: true },
    // username: { type: String, required: true },
    // email: { type: String, required: true },
    // phone: { type: Number, required: true },
    // address: {
    //     city: { type: String, required: true },
    //     state: { type: String, required: true },
    //     zip: { type: Number, required: true }
    // },
    // likeditems: [String],
    // hashtags: [String],
    // history: [String],
    // activelist: [String],
    // archivelist: [String]
  },
  // { timestamps: true },
)

module.exports = mongoose.model('user', User)