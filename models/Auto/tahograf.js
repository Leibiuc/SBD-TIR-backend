const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const TagografSchema = new mongoose.Schema({
    carNumber: { type: String, required: true },
    details: { type: String },
    category:{type:String, default:"AUTO"},
    dateEmitted: { type: Date, required: true },
    dateExpire: { type: Date }
});

TagografSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Tahograf', TagografSchema);