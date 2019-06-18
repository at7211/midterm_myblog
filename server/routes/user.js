const express = require('express');
const jwt = require('jsonwebtoken');
const { body, oneOf, validationResult } = require('express-validator/check');
const User = require('../db/models/user'); // 引入模型
const { MD5_SUFFIX, md5, secretKey } = require('../constant/constant');
const jwtAuth = require('./jwt');
const router = express.Router();

// router.use(jwtAuth);

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

// router.post('/login', (req, res) => {
//   if(req.body.account === 'at7211' && req.body.password === 'at0912487872'){
//     console.log('login success!!!')
//   }
// })

router.post(
  '/login',
  [
    [
      body('account')
        .isString()
        .withMessage('account 類型不正確'),
      body('password')
        .isString()
        .withMessage('password 類型不正確')
    ]
  ],
  (req, res) => {
    console.log('req.body', req.body);
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
      account: req.body.account
    };
    User.findOne(
      {
        account: req.body.account
      },
      (err, user) => {
        if (err) {
          res.send('server or db error');
        } else {
          User.findOne(
            {
              //判斷密碼是否正確
              account: req.body.account,
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

router.post(
  '/register',
  [
    body('account').isLength({ min: 6 }),
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
        account: req.body.account
      },
      (err, user) => {
        if (err) {
          res.send('server or db error');
        } else {
          if (user === null) {
            const insertObj = {
              account: req.body.account,
              password: md5(req.body.password + MD5_SUFFIX),
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
