const express = require('express');
const path = require('path');
const mongoose = require('./db/config/mongoose'); // 連接 mongodb 資料庫
const logger = require('morgan');
const bodyParser = require('body-parser');
const user = require('./routes/user');
const router = require('./routes/index');
const cors = require('cors');

const port = process.env.PORT || 3001;
const app = express();
const db = mongoose();

// app.use 放所有 request 前要經過的 middleware, 例如 bodyparser 或自己自訂的 middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);
app.use('/admin', user);

app.listen(port,() => {
  console.log(`server on ${port}`)
})
