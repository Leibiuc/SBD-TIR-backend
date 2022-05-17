const CMR = require('../../../models/Auto/CMR');

const deleteCMR = async (req, res, next) => {
    const CMRID = req.params.cmrID;

    let cmr;
    try {
        cmr = await CMR.findById(CMRID);
    } catch (err) {
        return res.status(500).json("Deleting cmr failed! ")
    }

    try {
        await cmr.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting CMR has failed! ", error: err })
    }
    return res.status(200).json({ message: "CMR deleted.", cmr: cmr })
}

module.exports = deleteCMR