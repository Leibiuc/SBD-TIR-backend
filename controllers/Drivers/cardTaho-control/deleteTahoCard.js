const TahoCard = require('../../../models/Drivers/tahoCard');
const deleteTahoCard = async (req, res, next) => {
    const tahoCardID = req.params.tahoCardID;

    let tahoCard;
    try {
        tahoCard = await TahoCard.findById(tahoCardID);
    } catch (err) {
        return res.status(500).json("Deleting taho card failed! ")
    }

    try {
        await tahoCard.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting taho card has failed! ", error: err })
    }
    return res.status(200).json({ message: "Taho card deleted.", tahoCard: tahoCard })
}

module.exports = deleteTahoCard