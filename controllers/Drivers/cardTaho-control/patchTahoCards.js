const TahoCard = require('../../../models/Drivers/tahoCard');
//const Product = require('../../models/product');

const updateTahocard = async (req, res, next) => {
    const tahocardID = req.params.tahoCardID;
    const { driverName ,image } = req.body
    let tahocard;
    try {
        tahocard = await TahoCard.findById(tahocardID);
        if (!tahocard)
            return res.status(500).json({ message: "Could not find the taho card. ", err: err })

    } catch (err) {
        return res.status(500).json({ message: "Could not update the taho card. ", err: err })
    }

    tahocard.image = image
    tahocard.fileType = image.includes('image') ? 'image' : 'pdf'
    tahocard.driverName = driverName

    try {
        await tahocard.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the taho card. ", err: err })
    }
    return res.status(200).json({ message: "Taho card updated.", tahocard: tahocard })
}

module.exports = updateTahocard