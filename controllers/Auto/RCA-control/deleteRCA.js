const RCA = require('../../../models/Auto/RCA');

const deleteRCA = async (req, res, next) => {
    const rcaID = req.params.rcaID;

    let rca;
    try {
        rca = await RCA.findById(rcaID);
    } catch (err) {
        return res.status(500).json("Deleting rca failed! ")
    }

    try {
        await rca.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting rca has failed! ", error: err })
    }
    return res.status(200).json({ message: "RCA deleted.", RCA: rca })
}

module.exports = deleteRCA