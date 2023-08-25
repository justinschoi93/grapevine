const router = require('express').Router();
const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../../controllers/userController');
const { addFriend, deleteFriend } = require('../../controllers/friendController');




router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:userId')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

router.route('/:userId/friends')
    .post(addFriend)

router.route('/:userId/friends/:friendId')
    .delete(deleteFriend);
    
module.exports = router;