const Listing = require('../models/listing-model')

// Create a listing 
createListing = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Create a listing',
        })
    }

    const listing = new Listing(body)

    if (!listing) {
        return res.status(400).json({ success: false, error: err })
    }

    listing
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: listing._id,
                message: 'Listing created',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Failed to create listing',
            })
        })
}

// Update an existing listing 
updateListing = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Provide something to update',
        })
    }

    Listing.findOne({ _id: req.params.id }, (err, listing) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Listing not found',
            })
        }

        listing.title = body.title
        listing.description = body.description
        listing.price = body.price
        listing.hashtags = body.hashtags
        listing.subcategories = body.subcategories
        listing.discounts = body.discounts
        listing.condition = body.condition
        listing.negotiability = body.negotiability

        listing
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: listing._id,
                    message: 'Listing updated',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Failed to update',
                })
            })
    })
}

// Delete a listing
deleteListing = async (req, res) => {
    await Listing.findOneAndDelete({ _id: req.params.id }, (err, listing) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!listing) {
            return res
                .status(404)
                .json({ success: false, error: `Listing not found` })
        }

        return res.status(200).json({ success: true, data: listing })
    }).catch(err => console.log(err))
}

// Get a single listing by its id
getListingById = async (req, res) => {
    await Listing.findOne({ _id: req.params.id }, (err, listing) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!listing) {
            return res
                .status(404)
                .json({ success: false, error: `Listing not found` })
        }
        return res.status(200).json({ success: true, data: listing })
    }).catch(err => console.log(err))
}

// Get all listings 
getListings = async (req, res) => {
    await Listing.find({}, (err, listings) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!listings.length) {
            return res
                .status(404)
                .json({ success: false, error: `No listings found` })
        }
        return res.status(200).json({ success: true, data: listings })
    }).catch(err => console.log(err))
}

// Filter by category, subcategory, hashtag, etc.
getListingsFilter = async (req, res) => {
    await Listing.find(req.query, (err, listings) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!listings.length) {
            return res
                .status(404)
                .json({ success: false, error: `No listings found` })
        }
        return res.status(200).json({ success: true, data: listings })
    }).catch(err => console.log(err))
}

// For each type respectively with req.params 
// getListingsByCategory = async (req, res) => {
//     await Listing.find({ categories: req.params.category }, (err, listings) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }
//         if (!listings.length) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `No listings found` })
//         }
//         return res.status(200).json({ success: true, data: listings })
//     }).catch(err => console.log(err))
// }

// getListingsBySubcat = async (req, res) => {
//     await Listing.find({ subcategories: req.params.subcat }, (err, listings) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }
//         if (!listings.length) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `No listings found` })
//         }
//         return res.status(200).json({ success: true, data: listings })
//     }).catch(err => console.log(err))
// }

// getListingsByHashtag = async (req, res) => {
//     await Listing.find({ hashtags: req.params.hashtag }, (err, listings) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }
//         if (!listings.length) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `No listings found` })
//         }
//         return res.status(200).json({ success: true, data: listings })
//     }).catch(err => console.log(err))
// }

// Sorting by price (ascending and descending)
sortByPriceAscend = async (req, res) => {    
    await Listing.find({}, (err, listings) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!listings.length) {
            return res
                .status(404)
                .json({ success: false, error: `No listings found` })
        }
        return res.status(200).json({ success: true, data: listings })
    })
    .sort({ price: 1 })
    .catch(err => console.log(err))
}

sortByPriceDescend = async (req, res) => {
    await Listing.find({}, (err, listings) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!listings.length) {
            return res
                .status(404)
                .json({ success: false, error: `No listings found` })
        }
        return res.status(200).json({ success: true, data: listings })
    })
    .sort({ price: -1 })
    .catch(err => console.log(err))
}

module.exports = {
    createListing,
    updateListing,
    deleteListing,
    getListings,
    getListingById,
    getListingsFilter,
    // getListingsByCategory,
    // getListingsBySubcat,
    // getListingsByHashtag, 
    sortByPriceAscend,
    sortByPriceDescend
}