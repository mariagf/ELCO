var express = require('express');
var router = express.Router();

var quizController = require('../controllers/sensor_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ELCOMOD' });
});
// Definición de rutas de /quizes
  router.get('/sensores', quizController.index);

router.get('/ELCOMODapp', function(req, res) {
  res.render('ELCOMODapp', { title: 'ELCOMODapp' });
});

router.get('/tienda', function(req, res) {
  res.render('tienda', { title: 'Tienda Online' });
});
router.get('/pagar', function(req, res) {
  res.render('pagar', { title: 'Tienda Online' });
});
router.get('/productos', function(req, res) {
  res.render('productos', { title: 'Nuestros Productos' });
});
router.get('/usuario', function(req, res) {
  res.render('usuario', { title: 'Manual de usuario' });
});

module.exports = router;
