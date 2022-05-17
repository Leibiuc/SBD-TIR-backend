const PinCard = require('../../../models/Auto/PinCard');

const updatePinCard = async (req, res, next) => {
    const pinCardID = req.params.pinCardID;
    let pinCard, { type, number, pin} = req.body;
    try {
        pinCard = await PinCard.findById(pinCardID);
    } catch (err) {
        return res.status(500).json({ message: "Could not find the pinCard. ", err: err })
    }
    pinCard.type = type;
    pinCard.number = number;
    pinCard.pin = pin;
    try {
        await pinCard.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the card. ", err: err })
    }
    return res.status(200).json({ message: "Card updated.", pinCard: pinCard })
}

module.exports = updatePinCard