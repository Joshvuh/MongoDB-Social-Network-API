const router = require('express').Router();
const {
    getAllThoughts,
    getSinglethought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:id').get(getSinglethought).put(updateThought).delete(deleteThought);

router.route("/:id/friends/:id").post(addReaction).delete(removeReaction);

module.exports = router;