const express = require('express');
const createGas = require('../../controllers/Drivers/gas-control/addGas');
const deleteGas = require('../../controllers/Drivers/gas-control/deleteGas');
const showAllGas = require('../../controllers/Drivers/gas-control/getGas');
const updateGas = require('../../controllers/Drivers/gas-control/patchGas');

const router = express.Router();

router.get('/',showAllGas);
router.post('/:driverID',createGas);
router.patch('/:gasID',updateGas);
router.delete('/:gasID',deleteGas);

module.exports = router;