const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const LicenseSchema = new mongoose.Schema({
    driverName: { type: String, required: true, unique: true },
    image: { type: String },
    fileType: {type: String},
    category:{type:String, default:"Drivers"},
    dateAdded: { type: Date, default:Date.now() },
    dateEmitted: { type: Date, required: true},
    dateExpired: { type: Date, required: true}   
});

LicenseSchema.plugin(uniqueValidator);

module.exports = mongoose.model('License', LicenseSchema);