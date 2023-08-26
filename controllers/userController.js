const {User, Thought} = require('../models');


//Functions for user routes

const getUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findOne({_id: req.params.userId})
            .select('-__v');

        if (!user) {
            return res.status(404).json({message: 'This user does not exist!'});
        }

        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);

        console.log(user);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body },
            {runvalidators: true, new: true }    
        );
        
        res.json(`${user.username}'s profile has been updated!`);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.userId });
        console.log(user);
        if (!user) {
            res.status(404).json({message: 'This user does not exist!'});
        }

        await Thought.deleteMany({ _id: { $in: user.thoughts}});
        res.json({message: 'User and thoughts deleted!'});

    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }