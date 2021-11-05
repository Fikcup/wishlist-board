const router = require('express').Router();
const authMiddleware = require('../../middleware/auth');
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
router.route('/').get(getAllWishlists).post(createWishlist, authMiddleware.jwtAuth);

// route /api/wishlists/:wishlistId
router.route('/:wishlistId').get(getOneWishlist).put(updateWishlist, authMiddleware.jwtAuth).delete(deleteWishlist, authMiddleware.jwtAuth);

// route /api/wishlists/:wishlistId/wish
router.route('/:wishlistId/wish').post(createWish, authMiddleware.jwtAuth);

// route /api/wishlists/:wishlistId/wish/:wishId
router.route('/:wishlistId/wish/:wishId').delete(deleteWish, authMiddleware.jwtAuth);

module.exports = router;