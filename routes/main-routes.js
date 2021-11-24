const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { axios } = require('axios');
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
    // TODO: get request for token information for jwt.verify
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
    // TODO: get request for token information for jwt.verify
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