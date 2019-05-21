const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Video = require('./models/vidoe.js')
const User = require('./models/user.js')


const app = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

mongoose
  .connect('mongodb+srv://at7211:at@487872@cluster0-tg6x5.mongodb.net/Ric_hw_mid?retryWrites=true', {
      useNewUrlParser: true})
  .then(() => console.log('MongoDB Connect'))
  .catch(err => console.log(err))

let db = mongoose.connection;

let video = new Video(
{  id: 1,
  name: 'asd',}
);
video.save()
    .then(() => console.log('video', video))

let user = new User(
  {
    account: 'at7211',
    password: 'at0912487872',
  }
);
user.save()
    .then(() => console.log('user', user))


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

app.get('/api/videos', async (req, res) => {
  res.json(videoArray)
})

app.get('/api/user', async (req, res) => {
  User.find()
    .exec()
    .then(items => {
      res.json(items)
    });
})

app.get('/api', (req, res) => {
  //不知道為什麼失敗ＱＡＱ
  Video.find()
    .exec()
    .then(docs => {
      console.log('docs', docs)
      res.json(docs)
    });
})

app.get('/api/articles', (req, res) =>{
  res.json([{
      id: 0,
      title: '前端好難',
      content: '嗚嗚嗚真的好難TAT',
  }, {
      id: 1,
      title: '後端好難',
      content: '嗚嗚嗚真的好難TAT',
  }, {
      id: 2,
      title: '學完 redux 後發現還有 graphql',
      content: 'asd',
  }])
});

app.listen(port,() => {
  console.log(`server on ${port}`)
})
