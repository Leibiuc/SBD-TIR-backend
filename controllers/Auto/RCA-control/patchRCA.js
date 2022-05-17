const RCA = require('../../../models/Auto/RCA');

const updateRCA = async (req, res, next) => {
    const rcaID = req.params.rcaID;
    let rca, details = req.body.details;
    try {
        rca = await RCA.findById(rcaID);
    } catch (err) {
        return res.status(500).json({ message: "Could not find the rca. ", err: err })
    }
    rca.details = details;
    try {
        await rca.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the rca. ", err: err })
    }
    return res.status(200).json({ message: "RCA updated.", ITP: rca })
}

module.exports = updateRCA