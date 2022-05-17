const express = require('express');
const createTahograf = require('../../../controllers/Auto/tahograf control/addTahograf');
const deleteTahograf = require('../../../controllers/Auto/tahograf control/deleteTahograf');
const showAllTahografs = require('../../../controllers/Auto/tahograf control/getTahografs');
const updateTahograf = require('../../../controllers/Auto/tahograf control/patchTahografs');

const router = express.Router();

router.get('/',showAllTahografs);
router.post('/',createTahograf);
router.patch('/:tahografID',updateTahograf);
router.delete('/:tahografID',deleteTahograf);

module.exports = router;