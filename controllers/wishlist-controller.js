const { Wishlist } = require('../models');

const wishlistController = {
    createWishlist(req, res) {
        Wishlist.create(req.body)
            .then((wishlistData) => {
                res.json(wishlistData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};

module.exports = wishlistController;