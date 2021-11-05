const { Schema, Types } = require('mongoose');

const wishSchema = new Schema(
    {
        _id: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        title: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 30,
        },
        wishText: {
            type: String,
            require: true,
            maxlength: 500,
        },
        createdAt: {
            type: Date,
            default: () => Date.now(),
        },
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

module.exports = wishSchema;