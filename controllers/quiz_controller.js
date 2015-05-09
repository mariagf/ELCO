var models = require('../models/models.js');

// GET /quizes
exports.index = function(req,res){
	models.Quiz.findAll().then(function(quizes){
		res.render('sensores/index',{quizes: quizes});
	})
	
};

