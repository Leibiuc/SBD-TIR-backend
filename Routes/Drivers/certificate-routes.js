const express = require('express');
const createCertificate = require('../../controllers/Drivers/certificate-control/addCertificate');
const deleteCertificate = require('../../controllers/Drivers/certificate-control/deleteCertificate');
const showAllCertificates = require('../../controllers/Drivers/certificate-control/getCertificates');
const updateCertificate = require('../../controllers/Drivers/certificate-control/patchCertificate');

const router = express.Router();

router.get('/',showAllCertificates);
router.post('/',createCertificate);
router.patch('/:certificateID',updateCertificate);
router.delete('/:certificateID',deleteCertificate) ;

module.exports = router;