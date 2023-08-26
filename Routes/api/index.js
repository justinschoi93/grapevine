const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

//routes

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;