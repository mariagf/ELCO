var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ELCOMOD' });
});
// Definición de rutas de /quizes
  router.get('/quizes', quizController.index);
  router.get('/quizes/:quizId(\\d+)', quizController.show);
  router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

router.get('/actuadores', function(req, res) {
  res.render('actuadores', { title: 'Actuadores' });
});

router.get('/author', function(req, res) {
  res.render('author', { title: 'Tienda Online' });
});

module.exports = router;