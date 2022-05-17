const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const truckSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    model_: { type: String, required: true },
    KM: { type: Number, required: true },
    carNumber: { type: String, required: true, unique:true },
    oilChange: { type: Number },
    oilChangeGroup: { type: Number },
    oilChangeBox: { type: Number },
    oilChangeRetarder: { type: Number },
    consume: { type: Number },
    oilType: { type: String },
    category:{type:String, default:"AUTO"},
    lastRevisionPlace: { type: String },
    date_added: { type: Date, default: Date.now(), },
    last_updated: { type: Date }
});

truckSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Truck', truckSchema);