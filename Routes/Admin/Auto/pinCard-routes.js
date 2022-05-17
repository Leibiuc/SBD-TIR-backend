const express = require('express');
const createPinCard = require('../../../controllers/Auto/pinCard-control/addPinCard');
const deletePinCard = require('../../../controllers/Auto/pinCard-control/deletePinCard');
const showAllPinCards = require('../../../controllers/Auto/pinCard-control/getPinCards');
const updatePinCard = require('../../../controllers/Auto/pinCard-control/patchPinCard');

const router = express.Router();

router.get('/',showAllPinCards);
router.post('/',createPinCard);
router.patch('/:pinCardID',updatePinCard);
router.delete('/:pinCardID',deletePinCard);

module.exports = router;