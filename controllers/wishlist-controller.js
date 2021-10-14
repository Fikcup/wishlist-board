const { Wishlist } = require('../models');

const wishlistController = {
    getAllWishlists(req, res) {
        Wishlist.find()
            .select('-__v')
            .then((wishlistData) => {
                res.json(wishlistData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    getOneWishlist(req, res) {
        Wishlist.findOne()
            .select('-__v')
            .then((wishlistData) => {
                if(!wishlistData) {
                    return res.status(404).json({ message: 'No wishlist with this id exists!' })
                }

                res.json(wishlistData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
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
    createWish(req, res) {
        Wishlist.findOneAndUpdate(
            { _id: req.params.wishlistId },
            { $addToSet: { wishes: req.body } },
            { runValidators: true, new: true }
        )
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