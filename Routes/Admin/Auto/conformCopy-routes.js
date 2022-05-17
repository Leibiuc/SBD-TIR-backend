const express = require('express');

const createConformCopy = require('../../../controllers/Auto/conformCopy-control/addConformCopy');
const deleteConformCopy = require('../../../controllers/Auto/conformCopy-control/deleteConformCopy');
const showAllConformCopies = require('../../../controllers/Auto/conformCopy-control/getConformCopies');
const updateConformCopy = require('../../../controllers/Auto/conformCopy-control/patchConformCopies');
const router = express.Router();

router.get('/',showAllConformCopies);
router.post('/',createConformCopy);
router.patch('/:conformID',updateConformCopy);
router.delete('/:conformID',deleteConformCopy);

module.exports = router;