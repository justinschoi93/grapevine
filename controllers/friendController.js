const { User } = require('../models');

const addFriend = async (req, res) => {
    try {
        const friend = await User.findOne({_id: req.params.friendId});
        
        const user = await User.findOneAndUpdate(
            {_id: req.params.userId},
            { $addToSet: { friends: friend}},
            { new: true }
        );

        if (!friend) {
            res.status(404).json({message: 'That friend does not exist!'});
        } else if (!user) {
            res.status(404).json({message: 'That user does not exist!'});
        };

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
            {$pull: { friends: friend}},
            {new: true}
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