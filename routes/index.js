var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api', function (req, res, next) {
  res.status(200).json({
    greetings: 'Testing connecting frontend with backend api 🙌',
  });
});

module.exports = router;
