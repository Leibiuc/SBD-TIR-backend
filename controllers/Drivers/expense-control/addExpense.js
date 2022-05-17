const Expense = require('../../../models/Drivers/Expense');

const createExpense = async (req, res, next) => {

    const {

        sum,
        transportType,
        advanceMoney,
        observations

    } = req.body

    let createdExpense;

    try {

        createdExpense = new Expense({

            sum,
            transportType,
            advanceMoney,
            observations

        })

        await createdExpense.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding expense has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Expense added!',
        expense: createdExpense
    });
};

module.exports = createExpense;