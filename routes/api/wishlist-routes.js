const router = require('express').Router();
const {
    getAllWishlists,
    getOneWishlist,
    createWishlist,
    updateWishlist,
    deleteWishlist,
    createWish,
} = require('../../controllers/wishlist-controller');

// route /api/wishlists
router.route('/').get(getAllWishlists).post(createWishlist);

// route /api/wishlists/:wishlistId
router.route('/:wishlistId').get(getOneWishlist).put(updateWishlist).delete(deleteWishlist);

// route /api/wishlists/:wishlistId/wish
router.route('/:wishlistId/wish').post(createWish);

module.exports = router;