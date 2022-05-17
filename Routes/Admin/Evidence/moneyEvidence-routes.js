const express = require('express');
const createMoneyEvi = require('../../../controllers/Evindece/moneyEvi-control/addMoneyEvi');
const deleteMoneyEvi = require('../../../controllers/Evindece/moneyEvi-control/deleteMoneyEvi');
const showAllMoneyEvi = require('../../../controllers/Evindece/moneyEvi-control/getMoneyEvi');
const updateMoneyEvidence = require('../../../controllers/Evindece/moneyEvi-control/patchMoneyEvi');

const router = express.Router();

router.get('/', showAllMoneyEvi);
router.post('/',createMoneyEvi);
router.patch('/:moneyEviID',updateMoneyEvidence);
router.delete('/:moneyEviID', deleteMoneyEvi);

module.exports = router;