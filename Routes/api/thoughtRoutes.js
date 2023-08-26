const router = require('express').Router();
const { getAllThoughts,
        getThought,
        createThought,
        updateThought,
        deleteThought,
        addReaction,
        deleteReaction
    } = require('../../controllers/thoughtController');

//routes and functions

router.route('/')
    .get(getAllThoughts)
    .post(createThought);

router.route('/:thoughtId')
    .get(getThought)
    .post(createThought)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId/reactions')
    .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;