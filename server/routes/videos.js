const express = require('express');
const Video = require('../db/models/video'); // 引入模型
const mongodb = require('mongodb');
const router = express.Router();
const mongoose = require('../db/config/mongoose'); // 連接 mongodb 資料庫

let newObjectId = mongodb.ObjectId()
let db = mongoose()
db.on('error', error => {
  console.log(error)
})

let videoArray = []

db.once('open', async () => {
  //應該有更好的寫法，求指教
	await console.log('db connect')
	await db.collection('video').find().toArray(function (err, items) {
      videoArray.push(...items)
    })
})

router.get('/', (req, res) => {
  res.json(videoArray)
  // db.collection('videos').find({})
  //   .then(items => {
  //     res.json(items)
  //   })
  //   .then(res => console.log('video', res));
  // Video.find()
  //   .exec()
  //   .then(items => {
  //     res.json(items)
  //   })
  //   .then(res => console.log('video', res));
  // await res.json(videos)
  //   .then(res => console.log('videos!!', res))
});
// {
//     _id: '5cd0823b1c9d4400005680eb',
//     id: 0,
//     name: 'NTU COMPETITION',
//     date: '2017.2 - 2017.5',
//     link: 'https://www.youtube.com/embed/kfzBM6ot9GI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&modestbranding=0',
//     img: 'https://i.imgur.com/dnFtQI6.jpg',
//     content: '全台公認最具指標性排舞競賽，被視為街舞年度盛會。將近2200名現場觀眾、直播線上人數可達一萬四千人。於2017年擔任總召，期間帶領50位團隊成員，策劃初賽＆決賽流程，並成功接洽Calvin',
// },

// router.get('/saveVideo', (req, res) => {
//   let video = new Video({
//     _id: newObjectId,
//     id: 1,
//     name: 'TIMING',
//     date: '2017.7 - 2019.1',
//     link: 'https://www.youtube.com/embed/IadwyRFYnF8?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&modestbranding=0',
//     img: 'https://i.imgur.com/RYLzJUV.jpg',
//     content: 'Timing是一個致力於傳承受到街舞文化的街舞媒體。以易理解的原創性內容，受到廣大街舞圈的支持，也曾和台灣吧、hornet、台中歌劇院週刊等單位合作過，幫助更多一般大眾理解街舞文化。主要於團隊中擔當主理人，以及部分的影片剪輯與動畫後製',
//   },);

//   video.save()
//     .then(res => console.log('video', res))
// })

module.exports = router