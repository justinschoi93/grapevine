const {Thought} = require('../models');

const getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();

        if (!thoughts) {
            res.status(404).json({message: 'There are no thoughts to display!'});
        } else {
            res.json({thoughts});
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

const getThought = async (req, res) => {
    try {
        const thought = await Thought.findOne({_id: req.params.thoughtId});
        if (!thought) {
            res.status(404).json({message: 'That thought does not exist!'});
        } else {
            res.json({thought});
        }
    } catch (err) {
        res.status(500).json(err);
    }; 
};

const createThought = async (req, res) => {
    try{
        const thought = await Thought.create(req.body);
        const user = await User.findOneAndUpdate(
            { _id: req.body.userId},
            {$addToSet: {thoughts: thought._id}},
            { new: true}
        )
        if (!user) {
            res.status(400).json({ message: 'Thought created, but the user does not exist!'});
        } else {
            res.json({message: `New thought created at ${thought.createdAt}!`});
        }

    } catch (err) {
        res.status(500).json(err);
    }; 
};

const updateThought = async (req, res) => {
    try{
        const thought = Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { new: true },
        )

        if (!thought) {
            res.status(404).json({ message: 'That thought does not exist!'});
        } else {
            res.json(thought);
        }

    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteThought = async (req, res) => {
    try {
        const thought = Thought.findOneAndDelete({_id: req.params.thoughtId});
        if (!thought) {
            res.status(404).json({ message: 'That thought did not exist!'});
        }
        const user = User.findOneAndUpdate(
            { _id: thought.userId },
            { $pull: {thoughts: thought._id} },
            { new: true }
        )
        if (!user) {
            res.status(404).json({message: 'The thought was deleted, but the user does not exist!'});
        } else {
            res.json({ message: `${user.username}'s thought has been deleted!`};)
        }
    } catch (err) {
        res.status(500).json(err);
    }; 
};

const addReaction = async (req, res) => {
    try {
        const thought = Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            { $addToSet: { reactions: req.body}},
            { runValidators: true, new: true }
        )
        if (!thought) {
            res.status(404).json({ message: 'The thought does not exist!'});
        } else {
            res.json({ message: `Reaction added to ${thought.username}'s thought!`});
        }
    } catch (err) {
        res.status(500).json(err);
    }; 
};

const deleteReaction = async (req, res) => {
    try {
        const thought = Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            { $pull: { reactions: {reactionId: req.params.reactionId}}},
            { runValidators: true, new: true },
        )
        if (!thought) {
            res.status(404).json({ message: 'That reaction does not exist!'});
        } else {
            res.json({ message: `Reaction deleted from ${thought.username}'s thought!`});
        }
    } catch (err) {
        res.status(500).json(err);
    }; 
};

module.exports = { getAllThoughts, getThought, createThought, updateThought, deleteThought, addReaction, deleteReaction }