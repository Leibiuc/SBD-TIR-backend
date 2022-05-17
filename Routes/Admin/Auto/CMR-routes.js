const express = require('express');
const { createCMR } = require('../../../controllers/Auto/CMR-control/add_CMR');
const deleteCMR = require('../../../controllers/Auto/CMR-control/delete_CMR');
const showAllCMRs = require('../../../controllers/Auto/CMR-control/get_CMRs');
const updateCMR = require('../../../controllers/Auto/CMR-control/pay_CMR');


const router = express.Router();

router.get('/',showAllCMRs);
router.post('/',createCMR);
router.patch('/:cmrID',updateCMR);
router.delete('/:cmrID', deleteCMR);

module.exports = router;