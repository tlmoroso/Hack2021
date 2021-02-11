var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/butt', function(req, res, next) {
	res.render('butt');
});

module.exports = router;
