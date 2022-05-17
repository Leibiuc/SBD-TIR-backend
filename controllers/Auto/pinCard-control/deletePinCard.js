const PinCard = require('../../../models/Auto/PinCard');

const deletePinCard = async (req, res, next) => {
    const pinCardID = req.params.pinCardID;

    let pinCard;
    try {
        pinCard = await PinCard.findById(pinCardID);
    } catch (err) {
        return res.status(500).json("Deleting card failed! ")
    }

    try {
        await pinCard.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting card has failed! ", error: err })
    }
    return res.status(200).json({ message: "Card deleted.", pinCard: pinCard })
}

module.exports = deletePinCard