const Raport = require('../../../models/Evidences/raports');
//const Product = require('../../models/product');

const updateRaport = async (req, res, next) => {
    const raportID = req.params.raportID;
    let raport;
    const {
        carNr,
        money,
        KmDone,
        expenses } = req.body;
    try {
        raport = await Raport.findById(raportID);
        if (!raport)
            return res.status(500).json({ message: "Could not find the raport. ", err: err })

    } catch (err) {
        return res.status(500).json({ message: "Could not update the raport. ", err: err })
    }

    raport.carNr = carNr;
    raport.money = money;
    raport.KmDone = KmDone;
    raport.expenses = expenses;


    try {
        await raport.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the raport. ", err: err })
    }
    return res.status(200).json({ message: "Raport updated.", raport: raport })
}

module.exports = updateRaport