const {User, Thought} = require('../models');

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

    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = User.findOneAndDelete({_id: req.params.userId});

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