const express = require('express');
const articles = require('./articles');
const videos = require('./videos');
const router = express.Router();

// router middleware
router.use((req, res, next) => {
  console.log('this is a api request!');
  // 把它交给下一個 middleware，注意 middleware 的註冊訊息是按序進行
  next();
});
router.use('/articles', articles);
router.use('/videos', videos);

// 處理 404
router.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// 處理5錯誤
router.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({
      code: 401,
      message: 'invalid token',
      data: err
    });
  } else {
    res.status(err.status || 500).json({
      code: err.status || 500,
      message: err.message,
      data: err
    });
  }
});

module.exports = router;
