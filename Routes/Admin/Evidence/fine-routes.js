const express = require('express');
const createFine = require('../../../controllers/Evindece/fine-control/addFine');
const updateFine = require('../../../controllers/Evindece/fine-control/collectFine');
const deleteFine = require('../../../controllers/Evindece/fine-control/deleteFine');
const showAllFines = require('../../../controllers/Evindece/fine-control/getFines');
const editFine = require('../../../controllers/Evindece/fine-control/patchFine');

const router = express.Router();

router.get('/', showAllFines);
router.post('/',createFine);
router.patch('/:fineID',updateFine);
router.patch('/edit/:fineID',editFine);
router.delete('/:fineID', deleteFine);

module.exports = router;