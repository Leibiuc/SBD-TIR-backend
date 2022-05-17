const express = require('express');
const createDrive = require('../../../controllers/Evindece/drivesA-control/addDrive');
const deleteDrive = require('../../../controllers/Evindece/drivesA-control/deleteDrive');
const showAllDrive = require('../../../controllers/Evindece/drivesA-control/getDrive');
const updateDrive = require('../../../controllers/Evindece/drivesA-control/patchDrive');

const router = express.Router();

router.get('/', showAllDrive);
router.post('/',createDrive);
router.patch('/:driveID',updateDrive);
router.delete('/:driveID', deleteDrive);

module.exports = router;