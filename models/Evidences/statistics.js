const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const DrivesSchema = new mongoose.Schema({
    totalDrives: { type: Number, required: true },
    moneyCashed: { type: Number, required: true },
    kmDone: { type: Number, required: true },
    category:{type:String, default:"Evidence"},
    dateAdded: { type: Date, required: true, default: Date.now() }
});

DrivesSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Statistic', DrivesSchema);