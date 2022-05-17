const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const ConformCopieschema = new mongoose.Schema({
    carNumber: { type: String, required: true },
    details: { type: String },
    category:{type:String, default:"AUTO"},
    dateEmitted: { type: Date, required: true },
    dateExpire: { type: Date }
});

ConformCopieschema.plugin(uniqueValidator);

module.exports = mongoose.model('ConformCopy', ConformCopieschema);