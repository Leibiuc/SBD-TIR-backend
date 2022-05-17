const MoneyEvindence = require('../../../models/Evidences/moneyEvi');

const createMoneyEvi = async (req, res, next) => {

    const {

        cashing,
        client,
        observations,
        sum,
        billNr


    } = req.body

    let createdMoneyEvi;

    try {

        createdMoneyEvi = new MoneyEvindence({

            billNr,
            sum,
            cashing,
            client,
            observations,

        })

        await createdMoneyEvi.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding moneyEvi has failed!",
            error: "Adding moneyEvi has failed!"
        })
    }

    res.status(201).json({
        message: 'MoneyEvi added!',
        MoneyEvindence: createdMoneyEvi
    });
};

module.exports = createMoneyEvi;