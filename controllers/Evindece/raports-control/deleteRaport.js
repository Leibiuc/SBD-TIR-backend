const Raport = require('../../../models/Evidences/raports');
const deleteRaport = async (req, res, next) => {
    const raportID = req.params.raportID;

    let raport;
    try {
        raport = await Raport.findById(raportID);
    } catch (err) {
        return res.status(500).json("Deleting raport failed! ")
    }

    try {
        await raport.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting raport has failed! ", error: err })
    }
    return res.status(200).json({ message: "raport deleted.", raport: raport })
}

module.exports = deleteRaport