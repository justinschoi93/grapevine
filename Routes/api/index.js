const router = require('express').Router();
const friendRoutes = require('./friendRoutes');
const thoughtRoutes = require('./throughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/friends', friendRoutes);
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);


module.exports = router;