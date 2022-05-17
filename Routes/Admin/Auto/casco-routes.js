const express = require('express');
const createCasco = require('../../../controllers/Auto/casco-control/addCasco');
const deleteCasco = require('../../../controllers/Auto/casco-control/deleteCasco');
const showAllCascos = require('../../../controllers/Auto/casco-control/getCascos');
const updateCasco = require('../../../controllers/Auto/casco-control/patchCasco');
const payCasco = require('../../../controllers/Auto/casco-control/payCasco');


const router = express.Router();

router.get('/',showAllCascos);
router.post('/',createCasco);
router.patch('/:cascoID',updateCasco);
router.patch('/pay/:cascoID',payCasco);
router.delete('/:cascoID',deleteCasco);

module.exports = router;