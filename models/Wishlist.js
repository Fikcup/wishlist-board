const { Schema, model } = require('mongoose');

const wishlistSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 50,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        wishes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Wish',
            }
        ],
    },
);

const Wishlist = model('Wishlist', wishlistSchema);

module.exports = Wishlist;