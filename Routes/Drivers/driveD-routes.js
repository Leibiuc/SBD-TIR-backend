const express = require('express');
const createDriveD = require('../../controllers/Drivers/driveD-control/addDriveD');
const deleteDriveD = require('../../controllers/Drivers/driveD-control/deleteDriveD');
const showAllDrivesD = require('../../controllers/Drivers/driveD-control/getDrivesD');
const updateDriveD = require('../../controllers/Drivers/driveD-control/patchDrive');

const router = express.Router();

router.get('/',showAllDrivesD);
router.post('/:driverID',createDriveD);
router.patch('/:driveID',updateDriveD);
router.delete('/:driveID',deleteDriveD);

module.exports = router;