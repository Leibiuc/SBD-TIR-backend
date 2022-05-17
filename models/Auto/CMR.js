const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const CMRSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String },
    number: { type: Number, required: true },
    ratesNr: { type: Number, required: true },
    category:{type:String, default:"AUTO"},
    rates:[{
         paid:{type:Boolean, default:false },
         date:{type:Date, required:true}
        }],
    dateEmitted: { type: Date, required: true },
});

CMRSchema.plugin(uniqueValidator);

module.exports = mongoose.model('CMR', CMRSchema);