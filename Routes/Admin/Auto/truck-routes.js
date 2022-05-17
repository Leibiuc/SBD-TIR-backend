const express = require('express');
const createTruck = require('../../../controllers/Auto/Truck-control/addTruck');
const deleteTruck = require('../../../controllers/Auto/Truck-control/deleteTruck');
const showAllTrucks = require('../../../controllers/Auto/Truck-control/getTruck');
const updateTruck = require('../../../controllers/Auto/Truck-control/patchTruck');

const router = express.Router();

router.get('/',showAllTrucks);
router.post('/',createTruck);
router.patch('/:truckID',updateTruck);
router.delete('/:truckID',deleteTruck );

module.exports = router;