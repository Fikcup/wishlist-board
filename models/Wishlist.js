const { Schema, Types, model } = require('mongoose');
const wishSchema = require('./Wish');

const wishlistSchema = new Schema(
    {
        _id: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
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
        wishes: [wishSchema],
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false,
    }
);

wishlistSchema.virtual('wishCount').get(function() {
    return this.wishes.length;
});

const Wishlist = model('Wishlist', wishlistSchema);

module.exports = Wishlist;