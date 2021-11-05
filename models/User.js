const { Schema, Types, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        _id: {
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
            select: false,
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
        wishlists: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Wishlist',
            }
        ],
    },
);

userSchema.methods.checkPassword = function(passwordVerify, cb) {
    bcrypt.compare(passwordVerify, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = model('User', userSchema);

module.exports = User;