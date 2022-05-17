const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const Eveniment = new mongoose.Schema({

    
    driverName: { type: String, required: true },
    description: { type: String },
    image: { type: Array},
    fileType: {type: String},
    category: { type: String, default: "Drivers" },
    dateAdded: { type: Date, required:true, default:Date.now() },
});

Eveniment.plugin(uniqueValidator);

module.exports = mongoose.model('Eveniment', Eveniment);