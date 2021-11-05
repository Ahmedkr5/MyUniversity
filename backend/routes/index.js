var express = require('express');
var router = express.Router();
const IndexController = require('../controller/indexController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload/:date', IndexController.uploada);
module.exports = router;
