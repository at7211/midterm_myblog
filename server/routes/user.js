const express = require('express');
const jwt = require('jsonwebtoken');
const { body, oneOf, validationResult } = require('express-validator/check');
const User = require('../db/models/user'); // 引入模型
const { MD5_SUFFIX, md5, secretKey } = require('../constant/constant');

const router = express.Router();


// let videoArray = []

// db.once('open', async () => {
//   //應該有更好的寫法，求指教
// 	await console.log('db connect')
// 	await db.collection('video').find().toArray(function (err, items) {
//       videoArray.push(...items)
//     })
// })
// router.get('/videos', async (req, res) => {
//   res.json(videoArray)
// })

router.get('/user', async (req, res) => {
  User.find()
    .exec()
    .then(items => {
      res.json(items)
    });
})

router.get('/', (req, res) => {
  //不知道為什麼失敗ＱＡＱ
  Video.find()
    .exec()
    .then(docs => {
      console.log('docs', docs)
      res.json(docs)
    });
})

router.get('/articles', (req, res) =>{
  console.log('test')
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

// 獲取用戶列表
router.get('/list', (req, res) => {
  User.find({}, (err, data) => {
    if (err) next(err);
    res.json({
      code: 0,
      message: '',
      data
    });
  });
});

//用戶登入
router.post(
  '/login',
  [
    [
      body('username')
        .isString()
        .withMessage('username 類型不正確'),
      body('password')
        .isString()
        .withMessage('password 類型不正確')
    ]
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        code: 422,
        message: '字段名稱不合法',
        data: {
          success: false,
          error: errors.array()
        }
      });
    }
    const tokenObj = {
      username: req.body.username
    };
    User.findOne(
      {
        username: req.body.username
      },
      (err, user) => {
        if (err) {
          res.send('server or db error');
        } else {
          User.findOne(
            {
              //判斷密碼是否正確
              username: req.body.username,
              password: md5(req.body.password + MD5_SUFFIX)
            },
            (err, user) => {
              if (user !== null) {
                // 用戶成功登入後生成 token 返给前端
                let token = jwt.sign(tokenObj, secretKey, {
                  expiresIn: 60 // 授權時效24小时
                });
                res.json({
                  code: 0,
                  message: 'success',
                  data: {
                    success: true,
                    token: token
                  }
                });
              } else {
                res.json({
                  code: 404,
                  message: 'User not found',
                  data: {
                    success: false
                  }
                });
              }
            }
          );
        }
      }
    );
  }
);

// 用户注册接口
router.post(
  '/register',
  [
    body('username').isLength({ min: 6 }),
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
  ],
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    console.log(errors, errors.isEmpty(), errors.array());
    if (!errors.isEmpty()) {
      return res.status(422).json({
        code: 422,
        message: '字段名稱不合法',
        data: {
          success: false,
          error: errors.array()
        }
      });
    }
    User.findOne(
      {
        //查找是否存在
        username: req.body.username
      },
      (err, user) => {
        if (err) {
          res.send('server or db error');
        } else {
          if (user === null) {
            const insertObj = {
              username: req.body.username,
              password: md5(req.body.password + MD5_SUFFIX),
              email: req.body.email,
              role: 10.0
            };
            const newUser = new User(insertObj);
            newUser.save(insertObj, (err, doc) => {
              if (err) {
                res.json({
                  code: 500,
                  messsge: '用戶註冊失敗',
                  data: {
                    success: false
                  }
                });
              } else {
                console.log(doc);
                res.json({
                  code: 0,
                  message: '用戶註冊成功',
                  data: { success: true }
                });
              }
            });
          } else {
            res.json({
              code: 423,
              messsge: '用戶名已存在',
              data: {
                success: false
              }
            });
          }
        }
      }
    );
  }
);

module.exports = router
