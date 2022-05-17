const express = require('express');
const createExpenseD = require('../../controllers/Drivers/expenseD-control/addExpenseD');
const deleteExpenseD = require('../../controllers/Drivers/expenseD-control/deleteExpenseD');
const showAllExpensesD = require('../../controllers/Drivers/expenseD-control/getExpensesd');
const updateExpenseD = require('../../controllers/Drivers/expenseD-control/patchExpenseD');

const router = express.Router();

router.get('/',showAllExpensesD);
router.post('/:driverID',createExpenseD);
router.patch('/:expenseID',updateExpenseD);
router.delete('/:expenseID',deleteExpenseD);

module.exports = router;