const CMR = require('../../../models/Auto/CMR');

const updateCMR = async (req, res, next) => {
    const cmrID = req.params.cmrID;
    let cmr, rateNr = req.body.rateNr;
    const paid =req.body.paid;
    try {
        cmr = await CMR.findById(cmrID);
    } catch (err) {
        return res.status(500).json({ message: "Could not find the cmr. ", err: err })
    }
    cmr.rates[rateNr].paid = paid;
    try {
        await cmr.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the cmr. ", err: err })
    }
    return res.status(200).json({ message: "Cmr updated.", cmr: cmr })
}

module.exports = updateCMR