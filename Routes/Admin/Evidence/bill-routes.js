const express = require('express');
const createBill = require('../../../controllers/Evindece/bills-control/addBill');
const updateBill = require('../../../controllers/Evindece/bills-control/collectBill');
const deleteBill = require('../../../controllers/Evindece/bills-control/deleteBill');
const showAllBills = require('../../../controllers/Evindece/bills-control/getBills');
const editBill = require('../../../controllers/Evindece/bills-control/patchBill');

const router = express.Router();

router.get('/', showAllBills);
router.post('/',createBill);
router.patch('/:billID',updateBill);
router.patch('/edit/:billID',editBill);
router.delete('/:billID', deleteBill);

module.exports = router;