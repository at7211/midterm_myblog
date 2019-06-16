const express = require('express');
const path = require('path');
const mongoose = require('./db/config/mongoose'); // 連接 mongodb 資料庫
const logger = require('morgan');
const bodyParser = require('body-parser');
const user = require('./routes/user');
const router = require('./routes/index');
const cors = require('cors');

const app = express();
const db = mongoose();
// 加载日志的中间件
// 每一次服务请求都会将信息打印在控制台中
app.use(logger('dev'));
const port = process.env.PORT || 3001;

//app.use 放所有 request 前要經過的 middleware, 例如 bodyparser 或自己自訂的 middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(cors());

app.use('/api', router); //添加router中间件
app.use('/admin', user);

// let videoArray = []

// db.once('open', async () => {
//   //應該有更好的寫法，求指教
// 	await console.log('db connect')
// 	await db.collection('video').find().toArray(function (err, items) {
//       videoArray.push(...items)
//     })
// })

// let video = new Video(
// {  id: 1,
//   name: 'asd',}
// );
// video.save()
//     .then(() => console.log('video', video))

// let user = new User(
//   {
//     account: 'at7211',
//     password: 'at0912487872',
//   }
// );
// user.save()
//     .then(() => console.log('user', user))

// db.on('error', error => {
//   console.log(error)
// })

app.listen(port,() => {
  console.log(`server on ${port}`)
})
