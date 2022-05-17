const express = require('express');
const createIdCard = require('../../controllers/Drivers/idCard-controller/add_idCard');
const deleteIdCard = require('../../controllers/Drivers/idCard-controller/delete_idCard');
const showAllIdCards = require('../../controllers/Drivers/idCard-controller/get_idCards');
const updateIdCard = require('../../controllers/Drivers/idCard-controller/patch_idCard');

const router = express.Router();

router.get('/',showAllIdCards);
router.post('/',createIdCard);
router.patch('/:idCardID',updateIdCard);
router.delete('/:idCardID',deleteIdCard) ;

module.exports = router;