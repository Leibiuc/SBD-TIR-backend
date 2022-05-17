const Casco = require('../../../models/Auto/casco');

const payCasco = async (req, res, next) => {
    const cascoID = req.params.cascoID;
    let casco, rateNr = req.body.rateNr;
    const paid =req.body.paid;
    try {
        casco = await Casco.findById(cascoID);
    } catch (err) {
        return res.status(500).json({ message: "Could not find the casco ", err: err })
    }
    casco.rates[rateNr].paid = paid;
    try {
        await casco.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the casco. ", err: err })
    }
    return res.status(200).json({ message: "Casco updated.", casco: casco })
}

module.exports = payCasco