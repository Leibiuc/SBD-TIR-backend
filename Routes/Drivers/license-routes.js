const express = require('express');
const createLicense = require('../../controllers/Drivers/licenses-control/addLicense');
const deleteLicense = require('../../controllers/Drivers/licenses-control/deleteLicense');
const showAllLicenses = require('../../controllers/Drivers/licenses-control/getLicenses');
const updateLicense = require('../../controllers/Drivers/licenses-control/patchLicense');

const router = express.Router();

router.get('/',showAllLicenses);
router.post('/',createLicense);
router.patch('/:licenseID',updateLicense);
router.delete('/:licenseID',deleteLicense) ;

module.exports = router;