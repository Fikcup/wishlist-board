require('dotenv').config();

module.exports = {
    secret: process.env.SECRET,
    jwtAuth: function(req, res, next) {
        const bearerHeader = req.headers['authorization'];

        if (typeof bearerHeader !== 'undefined') {
            const bearer = tokenHeader.split(' ');

            const bearerToken = bearer[1];

            req.token = bearerToken;

            next();
        } else {
            res.sendStatus(403).json({ message: 'Your token is invalid.' });
        }
    }
}