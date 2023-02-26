const { User, Thought } = require('../models');

module.exports = {
    getAllThoughts(req, res) {
        Thought.find()
            .select('-__v')
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err))
    },
}