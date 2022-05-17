const ExpenseD = require('../../../models/Drivers/ExpenseD');
//const Product = require('../../models/product');

const updateExpenseD = async (req, res, next) => {
    const expenseID = req.params.expenseID;
    const { sum , description, image,  } = req.body
    let expense;
    try {
        expense = await ExpenseD.findById(expenseID);
        if (!expense)
            return res.status(500).json({ message: "Could not find the expense. ", err: err })

    } catch (err) {
        return res.status(500).json({ message: "Could not update the expense. ", err: err })
    }

    expense.sum = sum
    expense.description = description
    expense.fileType = image.includes('image') ? 'image' : 'pdf'
    expense.image = image
    

    try {
        await expense.save();
    } catch (err) {
        return res.status(500).json({ message: "Error while updating the expence. ", err: err })
    }
    return res.status(200).json({ message: "Expense updated.", expense: expense })
}

module.exports = updateExpenseD