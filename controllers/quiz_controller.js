var models = require('../models/models.js');

// GET /sensores
exports.index = function(req,res){
	models.Quiz.findAll().then(function(sensores){
		res.render('sensores/index',{sensores: sensores});
	})
	
};

