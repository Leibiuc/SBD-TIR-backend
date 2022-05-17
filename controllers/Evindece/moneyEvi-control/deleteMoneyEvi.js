const MoneyEvi = require('../../../models/Evidences/moneyEvi');
const deleteMoneyEvi = async (req, res, next) => {
    const moneyEviID = req.params.moneyEviID;

    let moneyEvi;
    try {
        moneyEvi = await MoneyEvi.findById(moneyEviID);
    } catch (err) {
        return res.status(500).json("Deleting evi failed! ")
    }

    try {
        await moneyEvi.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting evi has failed! ", error: err })
    }
    return res.status(200).json({ message: "Evi deleted.", moneyEvi: moneyEvi })
}

module.exports = deleteMoneyEvi