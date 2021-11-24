const router = require('express').Router();
const authMiddleware = require('../../middleware/auth');
const {
    getAllUsers,
    getOneUser,
    createUser,
    loginUser,
    updateUser,
    deleteUser,
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:username
router.route('/:username').get(getOneUser).post(loginUser);

// /api/users/:userId
router.route('/:userId').put(updateUser, authMiddleware.jwtAuth).delete(deleteUser, authMiddleware.jwtAuth);

module.exports = router;