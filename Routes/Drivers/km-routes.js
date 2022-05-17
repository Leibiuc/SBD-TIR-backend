const express = require('express');
const createKm = require('../../controllers/Drivers/km-control/addKm');
const deleteKm = require('../../controllers/Drivers/km-control/deleteKm');
const showAllKms = require('../../controllers/Drivers/km-control/getKm');
const updateKm = require('../../controllers/Drivers/km-control/patchKm');


const router = express.Router();

router.get('/',showAllKms);
router.post('/:driverID',createKm);
router.patch('/:kmID',updateKm);
router.delete('/:kmID',deleteKm);

module.exports = router;