const crypto = require('crypto');

module.exports = {
  MD5_SUFFIX: 'JayChouNodeCrawler',
  md5: pwd => {
    let md5 = crypto.createHash('md5');
    return md5.update(pwd).digest('hex');
  },
  secretKey: 'yylslolz_060711_22_jwttoken'
};
