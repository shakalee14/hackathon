var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response, next) {
  response.render('index', { title: 'Hackathon' });
});

router.get('/about', function(request, response, next) {
  response.render('about');
});

router.post('/', function(request, response, next) {
  response.render('index', { title: 'Hackathon' });
});


module.exports = router;
