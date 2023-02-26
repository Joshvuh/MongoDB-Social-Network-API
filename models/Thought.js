const { Schema, Model } = require('mongoose');
const moment = rquire('moment')

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        },
        reactionBody: {
            String,
            required: true,
            maxLength: 280
        },
        username: {
            String,
            require: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: creationDate => moment(creationDate).format('MMMM Do YYYY, h:mm:ss a')
        }
    }
);


const thoughtSchema = new Schema(
    {
        thoughtText: {
            String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: creationDate => moment(creationDate).format('MMMM Do YYYY, h:mm:ss a')
        },
        username: {
            String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = Model('Thought', thoughtSchema);

module.exports = Thought;