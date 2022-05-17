const express = require('express');
const createEveniment = require('../../controllers/Drivers/eveniment-control/addEveniment');
const deleteEveniment = require('../../controllers/Drivers/eveniment-control/deleteEveniment');
const showAllEveniments = require('../../controllers/Drivers/eveniment-control/getEveniments');
const updateEveniment = require('../../controllers/Drivers/eveniment-control/patchEveniments');

const router = express.Router();

router.get('/',showAllEveniments);
router.post('/:driverID',createEveniment);
router.patch('/:evenimentID',updateEveniment);
router.delete('/:evenimentID',deleteEveniment);

module.exports = router;