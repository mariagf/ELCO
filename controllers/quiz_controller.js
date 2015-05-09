var models = require('../models/models.js');

// GET /quizes
exports.index = function(req,res){
	models.Quiz.findAll().then(function(quizes){
		res.render('sensores/index',{quizes: quizes});
	})
};

// GET /quizes/:id
exports.show = function(req,res){
	models.Quiz.find(req.params.quizId).then(function(quiz){
		res.render('sensores/show',{quiz: quiz});
	})
};

// GET /quizes/:id/answer
exports.answer = function(req,res){
	models.Quiz.find(req.params.quizId).then(function(quiz){
		if (req.query.respuesta === quiz.respuesta){
			res.render('sensores/answer',{
							quiz: quiz,
							respuesta: 'Correcta'});
		} else{
			res.render('sensores/answer',{
							quiz: quiz,
							respuesta: 'Incorrecta'});
		}
	})
	
};

