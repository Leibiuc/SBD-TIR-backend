const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const PinCardSchema = new mongoose.Schema({
    carNumber: { type: String, required: true },
    category:{type:String, default:"AUTO"},
    number: { type: String, required: true },
    pin: { type: String, required: true },
    type: { type: String, required: true },
    dateAdded: { type: Date, default: Date.now() },
});

PinCardSchema.plugin(uniqueValidator);

module.exports = mongoose.model('PinCard', PinCardSchema);