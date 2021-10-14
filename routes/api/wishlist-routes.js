const router = require('express').Router();
const {
    getAllWishlists,
    createWishlist,
    createWish,
} = require('../../controllers/wishlist-controller');

// route /api/wishlists
router.route('/').get(getAllWishlists).post(createWishlist);

// route /api/wishlists/:wishlistId
router.route('/:wishlistId');

// route /api/wishlists/:wishlistId/wish
router.route('/:wishlistId/wish').post(createWish);

module.exports = router;