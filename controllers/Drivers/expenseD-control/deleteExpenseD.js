const ExpenseD = require('../../../models/Drivers/ExpenseD');
const deleteExpenseD = async (req, res, next) => {
    const expenseID = req.params.expenseID;

    let expense;
    try {
        expense = await ExpenseD.findById(expenseID);
    } catch (err) {
        return res.status(500).json("Deleting expense failed! ")
    }

    try {
        await expense.remove()
    } catch (err) {
        return res.status(500).json({ message: "Deleting expense has failed! ", error: err })
    }
    return res.status(200).json({ message: "Expense deleted.", expense: expense })
}

module.exports = deleteExpenseD