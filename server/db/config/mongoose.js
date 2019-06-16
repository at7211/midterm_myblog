// 用於連接數據庫並且定義Schema和Model
const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
  //連接mongodb數據庫
  mongoose.connect(config.mongodb, { useNewUrlParser: true });
  // 實例化連接對象
  let db = mongoose.connection;
  // console.log('db', db)
  db.on('error', console.error.bind(console, 'connect error：'));
  db.once('open', callback => {
    console.log('MongoDB Connect!!!');
  });

  return db;
};
