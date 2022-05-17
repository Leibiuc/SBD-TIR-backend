const IdCard = require('../../../models/Drivers/IdCard');
//const Product = require('../../models/product');

const updateIdCard = async (req, res, next) => {
    const idCardID = req.params.idCardID;
    const { image, driverName } = req.body
    let idCard;
    try {
        idCard = await IdCard.findById(idCardID);

    } catch (err) {
        return res.status(500).json({ message: "Could not update the driver. ", err: err })
    }

    idCard.image = image;
    idCard.fileType = image.includes('image') ? 'image' : 'pdf';
    idCard.driverName = driverName;
    
    try {
        await idCard.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the driver. ", err: err })
    }
    return res.status(200).json({ message: "Driver updated.", driver: idCard })
}

module.exports = updateIdCard