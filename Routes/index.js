const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/', apiRoutes);

router.use((req, res) => res.send('This route does not exist!'));

module.exports = router;