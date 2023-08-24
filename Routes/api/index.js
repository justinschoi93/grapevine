const router = require('express').Router();
const friendRoutes = require('./friendRoutes');
const thoughtRoutes = require('./throughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/users/:userId/friends', friendRoutes);
router.use('/thoughts', thoughtRoutes);


module.exports = router;