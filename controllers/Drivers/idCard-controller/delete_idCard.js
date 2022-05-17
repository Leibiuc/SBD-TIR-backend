
const IdCard = require('../../../models/Drivers/IdCard');
const deleteIdCard = async (req, res, next) => {
    const IdCardID = req.params.idCardID;

    let idCard;
    try {
        idCard = await IdCard.findById(IdCardID);
    } catch (err) {
        return res.status(500).json("Deleting idCard failed! ")
    }

    try {
        await idCard.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting idCard has failed! ", error: err })
    }
    return res.status(200).json({ message: "Driver deleted.", driver: idCard })
}

module.exports = deleteIdCard