const express = require('express');
const createStatistic = require('../../../controllers/Evindece/statistics-control/addStatistic');
const deleteStatistic = require('../../../controllers/Evindece/statistics-control/deleteStatistic');
const showAllStatistics = require('../../../controllers/Evindece/statistics-control/getStatistic');
const updateStatistic = require('../../../controllers/Evindece/statistics-control/patchStatistics');

const router = express.Router();

router.get('/', showAllStatistics);
router.post('/',createStatistic);
router.patch('/:statisticID',updateStatistic);
router.delete('/:statisticID', deleteStatistic);

module.exports = router;