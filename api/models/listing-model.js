const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Listing entails:
// - Listing images (*)
// - Listing title
// - Listing description
// - Listing hashtags
// - Listing categories
// - Listing subcategories
// - Listing price
// - Listing price change/discounts
// - Listing item condition (pickup vs. shipping vs. both)
// - Listing price negotiability

const Listing = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    hashtags: [String],
    categories: [String],
    subcategories: [String],
    discounts: [String],
    condition: { type: String, required: true },
    negotiability: Boolean
  },
  { timestamps: true },
)

module.exports = mongoose.model('listing', Listing)