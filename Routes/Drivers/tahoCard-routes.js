const express = require('express');
const createTahoCard = require('../../controllers/Drivers/cardTaho-control/addCardTaho');
const deleteTahoCard = require('../../controllers/Drivers/cardTaho-control/deleteTahoCard');
const showAllTahoCards = require('../../controllers/Drivers/cardTaho-control/getTahoCards');
const updateTahocard = require('../../controllers/Drivers/cardTaho-control/patchTahoCards');
const router = express.Router();

router.get('/',showAllTahoCards);
router.post('/',createTahoCard);
router.patch('/:tahoCardID',updateTahocard);
router.delete('/:tahoCardID',deleteTahoCard) ;

module.exports = router;