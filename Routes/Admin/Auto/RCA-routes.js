const express = require('express');
const createRCA = require('../../../controllers/Auto/RCA-control/addRCA');
const deleteRCA = require('../../../controllers/Auto/RCA-control/deleteRCA');
const showAllRCAs = require('../../../controllers/Auto/RCA-control/getRCA');
const updateRCA = require('../../../controllers/Auto/RCA-control/patchRCA');


const router = express.Router();

router.get('/',showAllRCAs);
router.post('/',createRCA);
router.patch('/:rcaID',updateRCA);
router.delete('/:rcaID',deleteRCA);

module.exports = router;