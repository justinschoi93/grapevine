const { User } = require('../models');

const addFriend = async (req, res) => {
    
    try {
        console.log('adding friend...');
        const friend = await User.findOne({ _id: req.body._id });
        console.log(friend);
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: friend._id }},
            { runValidates: true, new: true }
        );
        console.log(user)
        if (!friend) {
            res.status(404).json({message: 'That friend does not exist!'});
        } else if (!user) {
            res.status(404).json({message: 'That user does not exist!'});
        };
        console.log(`${friend.username} has been added to ${user.username}'s friends list!`);
        res.json({message: `${friend.username} has been added to ${user.username}'s friends list!`});

    } catch (err) {
        res.status(500).json(err);
    }

};

const deleteFriend = async (req, res) => {
    try{
        const friend = await User.findOne({_id: req.params.friendId});
        const user = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {$pull: { friends: req.params.friendId }},
            { runValidates: true, new: true}
        )
        if (!friend) {
            res.status(404).json({message: 'That friend does not exist!'});
        } else if (!user) {
            res.status(400).json({message: 'That user does not exist!'});
        } else {
            res.json({message: `${friend.username} has been deleted from ${user.username}'s friends list!`});
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {addFriend, deleteFriend}