const router = require('express').Router();
const {
    getAllWishlists,
    getOneWishlist,
    createWishlist,
    updateWishlist,
    deleteWishlist,
    createWish,
    deleteWish,
} = require('../../controllers/wishlist-controller');

// route /api/wishlists
router.route('/').get(getAllWishlists).post(createWishlist);

// route /api/wishlists/:wishlistId
router.route('/:wishlistId').get(getOneWishlist).put(updateWishlist).delete(deleteWishlist);

// route /api/wishlists/:wishlistId/wish
router.route('/:wishlistId/wish').post(createWish);

// route /api/wishlists/:wishlistId/wish/:wishId
router.route('/:wishlistId/wish/:wishId').delete(deleteWish);

module.exports = router;