const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const carSchema = new mongoose.Schema({

    brand: { type: String, required: true },
    model_: { type: String, required: true },
    KM: { type: Number, required: true },
    carNumber: { type: String, required: true , unique:true},
    oilChange: { type: Number },
    consume: { type: Number },
    category:{type:String, default:"AUTO"},
    oilType: { type: String },
    lastRevisionPlace: { type: String },
    date_added: { type: Date, default: Date.now(), },
    last_updated: { type: Date }
});

carSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Car', carSchema);