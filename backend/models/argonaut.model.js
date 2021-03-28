const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const argonautSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            minlenght: 3,
        },
        tags: {
            type: [{
                type: String,
                minlenght: 3,
            }],
        }
    },
    {
        timestamp: true,
    }
);

const Argonaut = mongoose.model('Argonaut', argonautSchema);

module.exports = Argonaut;