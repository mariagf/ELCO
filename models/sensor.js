// Definición del modelo de Sensor

module.exports = function(sequelize, DataTypes){
	return sequelize.define('Sensor',
		{ sensor: DataTypes.STRING,
		  respuesta: DataTypes.STRING,
		});
}
