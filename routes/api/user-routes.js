const router = require('express').Router();
const {
    getAllUsers,
    getOneUser,
    createUser,
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getOneUser);

module.exports = router;