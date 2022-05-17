const Gas = require('../../../models/Drivers/gas');
//const Product = require('../../models/product');

const updateGas = async (req, res, next) => {
    const gasID = req.params.gasID;
    const { litres,
        price,
        place, } = req.body
    let gas;
    try {
        gas = await Gas.findById(gasID);
        if (!gas)
            return res.status(500).json({ message: "Could not find the gas. ", err: err })

    } catch (err) {
        return res.status(500).json({ message: "Could not update the gas. ", err: err })
    }

    gas.litres = litres
    gas.price = price
    gas.place = place

    try {
        await gas.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the gas. ", err: err })
    }
    return res.status(200).json({ message: "gas updated.", gas: gas })
}

module.exports = updateGas