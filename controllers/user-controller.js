const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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
        User.findOne({
            username: req.params.username
        })
            .select('-__v')
            .then((userData) => {
                res.json(userData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    loginUser(req, res) {
        User.findOne({
            username: req.params.username
        })
            .select('-__v')
            .select('userPassword')
            .then((userData) => {
                if (!userData) {
                    res.send('Your form data is invalid. Please try again.');
                } else {
                    if (bcrypt.compareSync(req.body.userPassword, userData.userPassword)) {
                        const token = jwt.sign({ id: userData.uuid }, process.env.SECRET)
                        res.json(token);
                    } else {
                        res.send('Your username or password is incorrect. Please try again.');
                    }
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // Users can sign up for an account
    createUser(req, res) {
        User.create(req.body)
            .then((userData) => {
                if (!userData) {
                    res.send('Your form data is invalid. Please try again.');
                } else {
                    const token = jwt.sign({ id: userData.uuid }, process.env.SECRET)
                    res.json(token);
                }
            })
            .catch((err) => {
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