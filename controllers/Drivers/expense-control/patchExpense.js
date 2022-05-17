const Expense = require('../../../models/Drivers/Expense');
//const Product = require('../../models/product');

const updateExpense = async (req, res, next) => {
    const expenseID = req.params.expenseID;
    const { sum , transportType, advanceMoney, observations } = req.body
    let expense;
    try {
        expense = await Expense.findById(expenseID);
        if (!expense)
            return res.status(500).json({ message: "Could not find the expense. ", err: err })

    } catch (err) {
        return res.status(500).json({ message: "Could not update the expense. ", err: err })
    }

    expense.sum = sum
    expense.transportType = transportType
    expense.advanceMoney = advanceMoney
    expense.observations = observations

    try {
        await expense.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the expence. ", err: err })
    }
    return res.status(200).json({ message: "Expense updated.", expense: expense })
}

module.exports = updateExpense