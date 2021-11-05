const router = require('express').Router();
const authMiddleware = require('../middleware/auth');
const { Wishlist } = require('../models');

router.get('/', async (req, res) => {
    try {
        const wishlistData = await Wishlist.find().lean();
        const wishlists = wishlistData.map((wishlist) => {
            return wishlist;
        });

        res.render('partials/all-wishlists', { wishlists });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // TODO: fix auth statement to check for
    if (authMiddleware.jwtAuth) {
        res.redirect('/');
        return;
    }

    res.render('partials/login');
});

router.get('/signup', (req, res) => {
    if (authMiddleware.jwtAuth) {
        res.redirect('/');
        return;
    }

    res.render('partials/signup');
});

module.exports = router;