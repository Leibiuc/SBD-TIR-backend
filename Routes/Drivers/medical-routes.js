const express = require('express');
const createMedical = require('../../controllers/Drivers/medical-control/addMedical');
const deleteMedical = require('../../controllers/Drivers/medical-control/deleteMedical');
const showAllMedicals = require('../../controllers/Drivers/medical-control/getMedicals');
const updateMedical = require('../../controllers/Drivers/medical-control/patchMedical');

const router = express.Router();

router.get('/',showAllMedicals);
router.post('/',createMedical);
router.patch('/:medicalID',updateMedical);
router.delete('/:medicalID',deleteMedical) ;

module.exports = router;