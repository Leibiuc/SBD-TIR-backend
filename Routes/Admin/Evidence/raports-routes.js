const express = require('express');
const createRaport = require('../../../controllers/Evindece/raports-control/addRaport');
const deleteRaport = require('../../../controllers/Evindece/raports-control/deleteRaport');
const showAllRaports = require('../../../controllers/Evindece/raports-control/getRaport');
const updateRaport = require('../../../controllers/Evindece/raports-control/patchRaport');

const router = express.Router();

router.get('/', showAllRaports);
router.post('/',createRaport);
router.patch('/:raportID',updateRaport);
router.delete('/:raportID', deleteRaport);

module.exports = router;