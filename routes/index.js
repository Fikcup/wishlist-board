const router = require('express').Router();
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-routes');
const mainRoutes = require('./main-routes');

// route /
router.use('/', mainRoutes);

// route /dashboard
router.use('/dashboard', dashboardRoutes);

// route /api
router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send('Wrong route!');
});

module.exports = router;