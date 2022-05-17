const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const Km = new mongoose.Schema({
    kmStartMonth: { type: Number, required: true },
    kmEndMonth: { type: Number },
    driverName: { type: String, required: true },
    category: { type: String, default: "Drivers" },
    date_added: { type: Date, default: Date.now() },
});

Km.plugin(uniqueValidator);

module.exports = mongoose.model('Km', Km);