const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const DriveD = new mongoose.Schema({

    changePalets: { type: Number, required: true },
    driverName: { type: String, required: true },
    startPlace: { type: String, required: true },
    unloadPlace: { type: String, required: true },
    category: { type: String, default: "Drivers" },
    date: { type: Date, required:true },
});

DriveD.plugin(uniqueValidator);

module.exports = mongoose.model('DriveD', DriveD);