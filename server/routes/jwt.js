const expressJwt = require('express-jwt');
const { secretKey } = require('../constant/constant');

const jwtAuth = expressJwt({
  secret: secretKey,
  credentialsRequired: true // 設置為 false 就不進行校驗了，遊客也可以訪問
}).unless({
  path: ['/admin/login', '/admin/register']
});

module.exports = jwtAuth;
