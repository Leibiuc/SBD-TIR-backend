const ITP = require('../../../models/Auto/ITP');

const updateITP = async (req, res, next) => {
    const itpID = req.params.itpID;
    let itp, details = req.body.details;
    try {
        itp = await ITP.findById(itpID);
    } catch (err) {
        return res.status(500).json({ message: "Could not find the itp. ", err: err })
    }
    itp.details = details;
    try {
        await itp.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the itp. ", err: err })
    }
    return res.status(200).json({ message: "ITP updated.", ITP: itp })
}

module.exports = updateITP