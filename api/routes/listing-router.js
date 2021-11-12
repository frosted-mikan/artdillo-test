const express = require('express')

const ListingCtrl = require('../controllers/listing-ctrl')

const router = express.Router()

router.post('/listing', ListingCtrl.createListing)
router.put('/listing/:id', ListingCtrl.updateListing)
router.delete('/listing/:id', ListingCtrl.deleteListing)
router.get('/listing/:id', ListingCtrl.getListingById)
router.get('/listings', ListingCtrl.getListings)

// Filter: put parameters in req.query
router.get('/listings/filter', ListingCtrl.getListingsFilter)

// router.get('/listings/category/:category', ListingCtrl.getListingsByCategory)
// router.get('/listings/subcat/:subcat', ListingCtrl.getListingsBySubcat)
// router.get('/listings/hashtag/:hashtag', ListingCtrl.getListingsByHashtag)

router.get('/listings/sort/priceascend', ListingCtrl.sortByPriceAscend)
router.get('/listings/sort/pricedescend', ListingCtrl.sortByPriceDescend)

module.exports = router