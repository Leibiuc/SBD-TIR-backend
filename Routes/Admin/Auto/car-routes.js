const express = require('express');
const createCar  = require('../../../controllers/Auto/Car-control/addCar');
const showAllCars = require('../../../controllers/Auto/Car-control/getCars');
const deleteCar = require('../../../controllers/Auto/Car-control/deleteCar');
const updateCar = require('../../../controllers/Auto/Car-control/patchCar');

const router = express.Router();

router.get('/',showAllCars);
router.post('/',createCar);
router.patch('/:carID',updateCar);
router.delete('/:carID',deleteCar );

module.exports = router;