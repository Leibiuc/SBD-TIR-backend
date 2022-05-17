const Km = require('../../../models/Drivers/km');
//const Product = require('../../models/product');

const updateKm = async (req, res, next) => {
    const kmID = req.params.kmID;
    const {  kmStartMonth,
        kmEndMonth  } = req.body
    let km;
    try {
        km = await Km.findById(kmID);
        if (!km)
            return res.status(500).json({ message: "Could not find the km. ", err: err })

    } catch (err) {
        return res.status(500).json({ message: "Could not update the km. ", err: err })
    }

    km.kmStartMonth = kmStartMonth
    km.kmEndMonth = kmEndMonth

    try {
        await km.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the km. ", err: err })
    }
    return res.status(200).json({ message: "km updated.", km: km })
}

module.exports = updateKm