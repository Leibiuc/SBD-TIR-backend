const express = require('express')

const userApp = express();

const idCardsRoutes = require('../Routes/Drivers/id-routes')
const licenseRoutes = require('../Routes/Drivers/license-routes')
const certificateRoutes = require('../Routes/Drivers/certificate-routes')
const medicalRoutes = require('../Routes/Drivers/medical-routes')
const tahoCardsRoutes = require('../Routes/Drivers/tahoCard-routes')
const expenseRoutes = require('../Routes/Drivers/expense-routes')
const expenseDRoutes = require('../Routes/Drivers/expenseD-routes')
const kmRoutes = require('../Routes/Drivers/km-routes')
const gasRoutes = require('../Routes/Drivers/gas-routes')
const driveDRoutes = require('../Routes/Drivers/driveD-routes')
const evenimentRoutes = require('../Routes/Drivers/eveniment-routes')
const fineDRoutes = require('../Routes/Drivers/fineD-routes')

userApp.use('/idCards',idCardsRoutes)
userApp.use('/licenses',licenseRoutes)
userApp.use('/certificates',certificateRoutes)
userApp.use('/medicals',medicalRoutes)
userApp.use('/tahoCards',tahoCardsRoutes)
userApp.use('/expenses',expenseRoutes)
userApp.use('/expensesD',expenseDRoutes)
userApp.use('/fineD',fineDRoutes)
userApp.use('/km',kmRoutes)
userApp.use('/gas',gasRoutes)
userApp.use('/drivesD',driveDRoutes)
userApp.use('/eveniments',evenimentRoutes)

module.exports = userApp