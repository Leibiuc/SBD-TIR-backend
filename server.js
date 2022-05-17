const express = require('express')
const bodyparser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors');

const dashboardApp = require('./APPS/dashboard');
const driversApp = require('./APPS/driversApp');

mongoose.connect('mongodb+srv://Leibiuc:U6ihvmh4SnRGXYub@cluster0.vk0ep.mongodb.net/dashboard?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log('connected to database Dashboard (0_0)')
  }).catch((err) => {
    console.log('connection failed (dashboard)'),
    console.log(err)
  });

const app = express();

app.use(cors({origin: true, credentials: true}));
app.use(bodyparser.json({limit: '400mb'}));
app.use(bodyparser.urlencoded({limit: '400mb', extended: true}));


app.use('/catalin/admin',dashboardApp);
app.use('/catalin/user',driversApp);

app.listen(8080);