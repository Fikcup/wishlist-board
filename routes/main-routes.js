const router = require('express').Router();
const authMiddleware = require('../middleware/auth');

router.get('/login', (req, res) => {
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
})

module.exports = router;