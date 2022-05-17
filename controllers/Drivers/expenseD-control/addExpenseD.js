const ExpenseD = require('../../../models/Drivers/ExpenseD');
const User = require('../../../models/user')
const createExpenseD = async (req, res, next) => {
    const driverID = req.params.driverID;
    let user;
    try {
        user = await User.findById(driverID);
    } catch (err) {
        return res.status(500).json("Getting driver name  failed! ")
    }
    const {

        sum,
        description,
        image

    } = req.body

    let createdExpenseD;

    try {

        createdExpenseD = new ExpenseD({
            driverName: user.carNumber + " " + user.name,
            description,
            sum,
            fileType: image.includes('image') ? 'image' : 'pdf',
            image

        })

        await createdExpenseD.save();

    } catch (err) {
        res.status(500).json({
            message: "Adding expenseD has failed!",
            error: err
        })
    }

    res.status(201).json({
        message: 'Expense added!',
        expense: createdExpenseD
    });
};

module.exports = createExpenseD;