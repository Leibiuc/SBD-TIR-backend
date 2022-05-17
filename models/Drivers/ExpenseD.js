const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const ExpenseD = new mongoose.Schema({
    sum: { type: Number, required: true },
    driverName: { type: String, required: true },
    category: { type: String, default: "Drivers" },
    description: { type: String },
    image: { type: Array },
    fileType: {type: String},
    date_added: { type: Date, default: Date.now() },
});

ExpenseD.plugin(uniqueValidator);

module.exports = mongoose.model('ExpenseD', ExpenseD);