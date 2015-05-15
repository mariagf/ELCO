var path = require('path');

//Postgress DATABAS_URL = postgress://user:passwd@host:port/database
//Sqlite DATABASE_URL = sqlite://:@:/
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name = (url[6] || null);
var user  = (url[2] || null);
var pwd  = (url[3] || null);
var protocol  = (url[1] || null);
var dialect = (url[1] || null);
var port = (url[5] || null);
var host = (url[4] || null);
var storage = process.env.DATABASE_STORAGE;

//CARGAR modelo ORM
var Sequelize = require('sequelize');

//USAR BBDD SQlite o  Postgres
var sequelize = new Sequelize(DB_name,user,pwd,
	{ dialect: protocol,
      protocol: protocol,
      port: port,
      host: host,
      storage: storage,
      omitNull: true
    }
);

//Importar la definicion de la tabla sensor en sensor.js
var sensor_path = path.join(__dirname,'sensor');
var Sensor = sequelize.import(sensor_path);

exports.Sensor = Sensor; //exportar definicion de la tabla Sensor

//sequelize.sync() crea e inicializa la tabla de preguntas en DB
sequelize.sync().then(function() {
    //then(..) ejecuta el manejador una vez creada la tabla
    Sensor.count().then(function(count){
        if(count === 0) { //la tabla se inicializa solo si esta vacia
            Sensor.create({ sensor:'Luces habitación principal',
                          respuesta: 'Off'
                         });
            Sensor.create({ sensor:'Música habitación principal',
				                  respuesta: 'Off'
			                   });
            Sensor.create({ sensor:'Sensor de gas habitación principal',
                          respuesta: 'Correcto'
                        });
            Sensor.create({ sensor:'Cámara habitación principal',
                          respuesta: 'Off'
                        });
            Sensor.create({ sensor:'Calefacción habitación principal',
                          respuesta: 'Off'
                        });
             Sensor.create({ sensor:'Aire acondicionado habitación principal',
                          respuesta: 'Off'
                        });
             Sensor.create({ sensor:'Alarma de incendios habitación principal',
                          respuesta: 'Corrrecto'
                        });
             Sensor.create({ sensor:'Ventana habitación principal',
                          respuesta: 'Cerrada'
                        })
            .then( function(){console.log('Base de datos inicializa')});
        };
    });
});

