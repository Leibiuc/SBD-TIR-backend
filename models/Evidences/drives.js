const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const DrivesSchema = new mongoose.Schema({
    
    category: { type: String, default: "Evidence" },
    loadCity: { type: String, required: true },
    unloadCity: { type: String, required: true },
    unload: { type: String, required: true },
    load: { type: String, required: true },
    KmStart: { type: Number, required: true },
    KmFinal: { type: Number },
    dateAdded: { type: Date, required: true, default: Date.now() }
});

DrivesSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Drive', DrivesSchema);