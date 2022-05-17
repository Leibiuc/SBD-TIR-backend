const express = require('express');
const createExpense = require('../../controllers/Drivers/expense-control/addExpense');
const deleteExpense = require('../../controllers/Drivers/expense-control/deleteExpense');
const showAllExpenses = require('../../controllers/Drivers/expense-control/getExpenses');
const updateExpense = require('../../controllers/Drivers/expense-control/patchExpense');

const router = express.Router();

router.get('/',showAllExpenses);
router.post('/',createExpense);
router.patch('/:expenseID',updateExpense);
router.delete('/:expenseID',deleteExpense);

module.exports = router;