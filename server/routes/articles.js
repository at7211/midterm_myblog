const express = require('express');
const Articles = require('../db/models/articles'); // 引入模型

const router = express.Router();

router.get('/', (req, res) =>{
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
      content: '工程師就是永遠學不完 ＱＡＱ',
  }])
});

module.exports = router