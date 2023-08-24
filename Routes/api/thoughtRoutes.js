const router = require('express').Router();
const { getAllThoughts,
        getThought,
        createThought,
        updateThought,
        deleteThought,
        addReaction,
        deleteReaction
    } = require('../../controllers/friendController');

router.use('/')
    .get(getAllThoughts);

router.use('/:thoughtId')
    .get(getThought)
    .post(createThought)
    .put(updateThought)
    .delete(deleteThought);

router.use('/:thoughtId/reactions')
    .post(addReaction)

router.use('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;