const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const Expense = new mongoose.Schema({
    sum: { type: Number, required: true },
    transportType: { type: String, required: true },
    advanceMoney: { type: Number },
    category: { type: String, default: "Drivers" },
    observations: { type: String },
    date_added: { type: Date, default: Date.now() },
});

Expense.plugin(uniqueValidator);

module.exports = mongoose.model('Expense', Expense);