const Casco = require('../../../models/Auto/casco');

const deleteCasco = async (req, res, next) => {
    const cascoID = req.params.cascoID;

    let casco;
    try {
        casco = await Casco.findById(cascoID);
    } catch (err) {
        return res.status(500).json("Deleting casco failed! ")
    }

    try {
        await casco.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting casco has failed! ", error: err })
    }
    return res.status(200).json({ message: "Casco deleted.", casco: casco })
}

module.exports = deleteCasco