const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const MoneyEvidenceSchema = new mongoose.Schema({
    cashing: { type: String, required: true },
    client: { type: String, required: true },
    observations: { type: String },
    category: { type: String, default: "Evidence" },
    sum: { type: Number, required: true },
    billNr: { type: Number, required: true, unique: true },
    dateAdded: { type: Date, default: Date.now() }
});

MoneyEvidenceSchema.plugin(uniqueValidator);

module.exports = mongoose.model('MoneyEvidence', MoneyEvidenceSchema);