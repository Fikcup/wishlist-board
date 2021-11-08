const router = require('express').Router();
const authMiddleware = require('../middleware/auth');
const jwt = require('jsonwebtoken');
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
    jwt.verify(req.token, process.env.SECRET, (err, authData) => {
        if (err) {
            res.render('partials/login');
        } else {
            res.json({
                message: 'You are already logged in.',
                authData
            })
            res.redirect('/');
        }
    });
});

router.get('/signup', (req, res) => {
    jwt.verify(req.token, process.env.SECRET, (err, authData) => {
        if (err) {
            res.render('partials/signup');
        } else {
            res.json({
                message: 'You are already logged in.',
                authData
            })
            res.redirect('/');
        }
    });
});

module.exports = router;