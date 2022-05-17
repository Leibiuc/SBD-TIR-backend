const MoneyEvindence = require('../../../models/Evidences/moneyEvi');
//const Product = require('../../models/product');

const updateMoneyEvidence = async (req, res, next) => {
    const moneyEviID = req.params.moneyEviID;
    let moneyEvi;
    const observations = req.body.observations
    try {
        moneyEvi = await MoneyEvindence.findById(moneyEviID);
        if (!moneyEvi)
            return res.status(500).json({ message: "Could not find the evi. ", err: err })

    } catch (err) {
        return res.status(500).json({ message: "Could not update the evi. ", err: err })
    }

    moneyEvi.observations = observations;

    try {
        await moneyEvi.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the evi. ", err: err })
    }
    return res.status(200).json({ message: "Evi updated.", MoneyEvindence: moneyEvi })
}

module.exports = updateMoneyEvidence