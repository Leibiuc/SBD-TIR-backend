const ITP = require('../../../models/Auto/ITP');

const deleteITP = async (req, res, next) => {
    const itpID = req.params.itpID;

    let itp;
    try {
        itp = await ITP.findById(itpID);
    } catch (err) {
        return res.status(500).json("Deleting itp failed! ")
    }

    try {
        await itp.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting itp has failed! ", error: err })
    }
    return res.status(200).json({ message: "ITP deleted.", cmr: itp })
}

module.exports = deleteITP