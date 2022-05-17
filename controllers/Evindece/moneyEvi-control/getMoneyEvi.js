const MoneyEvidence = require('../../../models/Evidences/moneyEvi');

const showAllMoneyEvi = async (req, res, next) => {
    let moneyEvidences
    try {

        moneyEvidences = await MoneyEvidence.find().exec();

        if (!moneyEvidences)
            return res.json({
                message: " No evi found!"
            });
    } catch (err) {
        return res.json({ message: "Could not show evis.", err: err })
    }
    res.json({
        message: "Money Evis: ",
        moneyEvidences: moneyEvidences
    })

}

module.exports = showAllMoneyEvi