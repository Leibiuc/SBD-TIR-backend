const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const CascoSchema = new mongoose.Schema({
    carNumber: { type: String, required: true },
    details: { type: String },
    category:{type:String, default:"AUTO"},
    rates:[{
        paid:{type:Boolean, default:false },
        date:{type:Date, required:true}
       }],
    dateEmitted: { type: Date, required: true },
    dateExpire: { type: Date }
});

CascoSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Casco', CascoSchema);