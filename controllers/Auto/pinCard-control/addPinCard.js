const PinCard = require('../../../models/Auto/PinCard');

const createPinCard = async (req, res, next) => {

    const {
        carNumber,
        type,
        number,
        pin
    } = req.body

    let createdPinCard;

    try {
        createdPinCard = new PinCard({
            carNumber,
            type,
            number,
            pin
        })
        await createdPinCard.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding card has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Card added!',
       PinCard: createdPinCard
    });
};
module.exports = createPinCard;