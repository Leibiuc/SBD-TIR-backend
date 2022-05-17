const Tahograf = require('../../../models/Auto/tahograf');

const updateTahograf = async (req, res, next) => {
    const tahografID = req.params.tahografID;
    let tahograf, details = req.body.details;
    try {
        tahograf = await Tahograf.findById(tahografID);
    } catch (err) {
        return res.status(500).json({ message: "Could not find the tahograf. ", err: err })
    }
    tahograf.details = details;
    try {
        await tahograf.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the itp. ", err: err })
    }
    return res.status(200).json({ message: "ITP updated.", tahograf: tahograf })
}

module.exports = updateTahograf