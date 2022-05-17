const express = require('express');
const createITP = require('../../../controllers/Auto/ITP-control/addITP');
const deleteITP = require('../../../controllers/Auto/ITP-control/deleteITPs');
const showAllITPs = require('../../../controllers/Auto/ITP-control/getITPs');
const updateITP = require('../../../controllers/Auto/ITP-control/patchITP');


const router = express.Router();

router.get('/',showAllITPs);
router.post('/',createITP);
router.patch('/:itpID',updateITP);
router.delete('/:itpID',deleteITP);

module.exports = router;