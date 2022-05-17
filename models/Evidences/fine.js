const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const FineSchema = new mongoose.Schema({
    driverName: { type: String, required: true },
    carNumber: { type: String, required: true },
    fineImage: { type: String },
    observations: { type: String },
    category:{type:String, default:"Evidence"},
    sum: { type: Number, required: true },
    dateEmitted: { type: Date, required: true },
    dateExpire: { type: Date },
    collected: { type: Boolean, default: false }
});

FineSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Fine', FineSchema);