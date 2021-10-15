const { Wishlist } = require('../models');

const wishlistController = {
    // Users can view all created wishlists
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
    // Users can find a specific wishlist by searching associated data
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
    // Users can create multiple wishlists for their account
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
    // Users can update wishlist title
    updateWishlist(req, res) {
        Wishlist.findOneAndUpdate(
            { _id: req.params.wishlistId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
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
    // Users can delete their own wishlists
    deleteWishlist(req, res) {
        Wishlist.findOneAndDelete(
            { _id: req.params.wishlistId },
        )
            .then((wishlistData) => {
                if(!wishlistData) {
                    return res.status(404).json({ message: 'No wishlist with this id exists!' })
                }

                res.json({ message: 'Wishlist has been deleted!' });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // Users can add wishes to their wishlist
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
    // Users can remove wishes from their wishlist
    deleteWish(req, res) {
        Wishlist.findOneAndUpdate(
            { _id: req.params.wishlistId },
            { $pull: { wishes: { wishId: req.params.wishId } } },
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