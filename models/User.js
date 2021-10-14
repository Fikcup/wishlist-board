const { Schema, Types, model } = require('mongoose');
const { Wishlist } = require('./Wishlist');

const userSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        username: {
            type: String,
            require: true,
            unique: true,
            minlength: 5,
            maxlength: 50,
        },
        userPassword: {
            type: String,
            require: true,
            minlength: 8,
            maxlength: 128,
        },
        userFirst: {
            type: String,
            require: true,
            minlength: 1,
            maxlength: 50,
        },
        userLast: {
            type: String,
            minlength: 1,
            maxlength: 50,
        },
        wishlists: [Wishlist],
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false,
    }
);

userSchema.virtual('wishlists').get(function() {
    return this.wishlists.legnth;
});

const User = model('User', userSchema);

module.exports = User;