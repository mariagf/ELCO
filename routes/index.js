var express = require('express');
var router = express.Router();

var quizController = require('../controllers/sensor_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ELCOMOD' });
});
// Definición de rutas de /quizes
  router.get('/sensores', quizController.index);

router.get('/actuadores', function(req, res) {
  res.render('actuadores', { title: 'Actuadores' });
});

router.get('/tienda', function(req, res) {
  res.render('tienda', { title: 'Tienda Online' });
});
router.get('/pagar', function(req, res) {
  res.render('pagar', { title: 'Tienda Online' });
});

module.exports = router;
