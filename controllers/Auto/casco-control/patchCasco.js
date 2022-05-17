const Casco = require('../../../models/Auto/casco');

const updateCasco = async (req, res, next) => {
    const cascoID = req.params.cascoID;
    let casco, details = req.body.details;
    try {
        casco = await Casco.findById(cascoID);
    } catch (err) {
        return res.status(500).json({ message: "Could not find the casco ", err: err })
    }
    casco.details = details;
    try {
        await casco.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the casco. ", err: err })
    }
    return res.status(200).json({ message: "Casco updated.", casco: casco })
}

module.exports = updateCasco