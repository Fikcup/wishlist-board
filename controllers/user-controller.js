const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/auth');

const userController = {
    // Users can find other registered users
    getAllUsers(req, res) {
        User.find()
            .select('-__v')
            .then((userData) => {
                res.json(userData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // Users can search for a specific user
    getOneUser(req, res) {
        User.findOne()
            .select('-__v')
            .then((userData) => {
                res.json(userData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // Users can sign up for an account
    createUser(req, res) {
        var hashedPassword = bcrypt.hashSync(req.body.userPassword, 10);

        User.create({
            username: req.body.username,
            userPassword: hashedPassword,
            userFirst: req.body.userFirst,
            userLast: req.body.userLast
        })
            .then((userData) => {
                var token = jwt.sign({ id: userData._id }, authMiddleware.secret, {
                    expiresIn: 86400
                });
                res.status(200).send({ auth: true, token: token});
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // Users can update their account information
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true, }
        )
            .then((userData) => {
                res.json(userData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // Users can delete their account
    deleteUser(req, res) {
        User.findOneAndDelete(
            { _id: req.params.userId }
        )
            .then((userData) => {
                res.json(userData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};

module.exports = userController;