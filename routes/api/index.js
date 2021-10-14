const router = require('express').Router();
const userRoutes = require('./user-routes');
const wishlistRoutes = require('./wishlist-routes');

// route /api/users
router.use('/users', userRoutes);

// route /api/wishlists
router.use('/wishlists', wishlistRoutes);

module.exports = router;