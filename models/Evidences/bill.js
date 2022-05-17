const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const BillSchema = new mongoose.Schema({
    billNr: { type: Number, required: true , unique:true},
    sum: { type: Number, required: true },
    category:{type:String, default:"Evidence"},
    dateEmitted: { type: Date, required: true },
    dateExpire: { type: Date },
    collected: { type: Boolean, default: false }
});

BillSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Bill', BillSchema);