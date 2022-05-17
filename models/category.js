const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const categorySchema = new mongoose.Schema({

    name: { type: String, required: true, unique: true },
    description: { type: String },
    date_added: { type: Date, default: Date.now() },
    last_updated: { type: Date }
});

categorySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Category', categorySchema);