const express = require('express');
const createFineD = require('../../controllers/Drivers/fineD-control/addFineD');
const deleteFineD = require('../../controllers/Drivers/fineD-control/deleteFineD');
const showAllFinesD = require('../../controllers/Drivers/fineD-control/getFineD');
const updateFineD = require('../../controllers/Drivers/fineD-control/patchFineD');
const router = express.Router();

router.get('/',showAllFinesD);
router.post('/:driverID',createFineD);
router.patch('/:fineID',updateFineD);
router.delete('/:fineID',deleteFineD);

module.exports = router;