const Fine = require('../../../models/Evidences/fine');
//const Product = require('../../models/product');

const updateFine = async (req, res, next) => {
    const fineID = req.params.fineID;
    let fine;
    try {
        fine = await Fine.findById(fineID);
        if (!fine)
            return res.status(500).json({ message: "Could not find the fine. ", err: err })

    } catch (err) {
        return res.status(500).json({ message: "Could not update the fine. ", err: err })
    }

    fine.collected = !fine.collected;

    try {
        await fine.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the fine. ", err: err })
    }
    return res.status(200).json({ message: "fine updated.", fine: fine })
}

module.exports = updateFine