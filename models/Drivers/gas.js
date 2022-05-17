const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const Gas = new mongoose.Schema({
    litres: { type: Number, required: true },
    price: { type: Number, required:true },
    driverName: { type: String, required: true },
    place: { type: String, required: true },
    category: { type: String, default: "Drivers" },
    dateAdded: { type: Date, default: Date.now() },
});

Gas.plugin(uniqueValidator);

module.exports = mongoose.model('Gas', Gas);