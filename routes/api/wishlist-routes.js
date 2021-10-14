const router = require('express').Router();
const {
    createWishlist,
    createWish,
} = require('../../controllers/wishlist-controller');

// route /api/wishlists
router.route('/').post(createWishlist);

// route /api/wishlists/:wishlistId
router.route('/:wishlistId');

// route /api/wishlists/:wishlistId/wish
router.route('/:wishlistId/wish').post(createWish);

module.exports = router;