var models = require('../models/models.js');

// GET /sensores
exports.index = function(req,res){
	models.Sensor.findAll().then(function(sensores){
		res.render('sensores/index',{sensores: sensores});
	})
	
};

