const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const Raports = new mongoose.Schema({
    carNr: { type: String, required: true },
    money: { type: Number, required: true },
    category:{type:String, default:"Evidence"},
    KmDone: { type: Number, required: true },
    expenses: { type: Number, required: true },
    dateAdded: { type: Date, required: true, default: Date.now() }
});

Raports.plugin(uniqueValidator);


module.exports = mongoose.model('Raport', Raports);