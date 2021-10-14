const router = require('express').Router();
const {

} = require('../../controllers/wishlist-controller');

// route /api/wishlists
router.route('/');

// route /api/wishlists/:wishlistId
router.route('/:wishlistId');

// route /api/wishlists/:wishlistId/wish
router.route('/:wishlistId/wish')

module.exports = router;