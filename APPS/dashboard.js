const express = require('express')

const dashboardApp = express();

const userRoutes = require('../Routes/Admin/users-routes')
const categoryRoutes = require('../Routes/Admin/category-routes')
const CMRRoutes = require('../Routes/Admin/Auto/CMR-routes')
const carRoutes = require('../Routes/Admin/Auto/car-routes')
const truckRoutes = require('../Routes/Admin/Auto/truck-routes')
const ITPsRoutes = require('../Routes/Admin/Auto/ITP-routes')
const RCAsRoutes = require('../Routes/Admin/Auto/RCA-routes')
const tahografsRoutes = require('../Routes/Admin/Auto/tahograf-routes')
const cascoRoutes = require('../Routes/Admin/Auto/casco-routes')
const conformCopiesRoutes = require('../Routes/Admin/Auto/conformCopy-routes')
const pinCardsRoutes = require('../Routes/Admin/Auto/pinCard-routes')
const billRoutes = require('../Routes/Admin/Evidence/bill-routes')
const fineRoutes = require('../Routes/Admin/Evidence/fine-routes')
const moneyEvidenceRoutes = require('../Routes/Admin/Evidence/moneyEvidence-routes')
const statisticsRoutes = require('../Routes/Admin/Evidence/statistic-routes')
const driveRoutes = require('../Routes/Admin/Evidence/drive-route')
const raportsRoutes = require('../Routes/Admin/Evidence/raports-routes')

// /admin
dashboardApp.use('/users',userRoutes)
dashboardApp.use('/categories',categoryRoutes)
dashboardApp.use('/CMRs',CMRRoutes)
dashboardApp.use('/cars',carRoutes)
dashboardApp.use('/trucks',truckRoutes)
dashboardApp.use('/ITPs',ITPsRoutes)
dashboardApp.use('/RCAs',RCAsRoutes)
dashboardApp.use('/tahografs',tahografsRoutes)
dashboardApp.use('/cascos',cascoRoutes)
dashboardApp.use('/conformCopies',conformCopiesRoutes)
dashboardApp.use('/pinCards',pinCardsRoutes)
dashboardApp.use('/bills',billRoutes)
dashboardApp.use('/fines',fineRoutes)
dashboardApp.use('/moneyEvidence',moneyEvidenceRoutes)
dashboardApp.use('/statistics',statisticsRoutes)
dashboardApp.use('/drives',driveRoutes)
dashboardApp.use('/raports',raportsRoutes)


module.exports = dashboardApp