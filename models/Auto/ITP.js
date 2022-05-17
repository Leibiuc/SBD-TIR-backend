const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const ITPSchema = new mongoose.Schema({
    carNumber: { type: String, required: true },
    details: { type: String },
    category: { type: String, default: "AUTO" },
    dateEmitted: { type: Date, required: true },
    dateExpire: { type: Date, required: true }
});

ITPSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Itp', ITPSchema);