const router = require('express').Router();
const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../../controllers/userController');

router.use('/').get(getUsers);
router.use('/:userId')
    .get(getUser)
    .post(createUser)
    .put(updateUser)
    .delete(deleteUser);


module.exports = router;