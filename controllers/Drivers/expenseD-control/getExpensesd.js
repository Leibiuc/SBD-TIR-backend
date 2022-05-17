const ExpenseD = require('../../../models/Drivers/ExpenseD');

const showAllExpensesD = async (req, res, next) => {
    let expenses
    try {

        expenses = await ExpenseD.find().exec();

        if (!expenses)
            return res.json({
                message: " No expenses found!"
            });
    } catch (err) {
        return res.json({ message: "Could not show expenses.", err: err })
    }
    res.json({
        message: "Expenses: ",
       expenses: expenses
    })

}

module.exports = showAllExpensesD