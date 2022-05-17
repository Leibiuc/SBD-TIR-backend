const Km = require('../../../models/Drivers/km');
const deleteKm = async (req, res, next) => {
    const kmID = req.params.kmID;

    let km;
    try {
        km = await Km.findById(kmID);
    } catch (err) {
        return res.status(500).json("Deleting km failed! ")
    }

    try {
        await km.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting km has failed! ", error: err })
    }
    return res.status(200).json({ message: "km deleted.", km: km })
}

module.exports = deleteKm