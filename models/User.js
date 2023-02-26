const { Schema, Model } = require('mongoose');
import { isEmail } from 'validator';

const userSchema = new Schema(
    {
        username: {
            String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            String,
            unique: true,
            required: true,
            validate: [isEmail, 'Invalid Email']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = Model('User', userSchema);

module.exports = User;