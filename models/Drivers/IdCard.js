const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const IdCardSchema = new mongoose.Schema({
    driverName: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    fileType: {type: String},
    category:{type:String, default:"Drivers"},
    dateAdded: { type: Date, default:Date.now()},
    dateEmitted: { type: Date, required: true},
    dateExpired: { type: Date, required: true}     
});

IdCardSchema.plugin(uniqueValidator);

module.exports = mongoose.model('IdCard', IdCardSchema);