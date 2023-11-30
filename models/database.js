const { Sequelize } = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWD, {
  host: 'localhost',
  dialect: 'mysql'
});

exports.sequelize = sequelize;

exports.connect = async function(){
    try {
        await sequelize.authenticate();
        console.log("> Conexion exitosa a la DB.");
    } catch (e) {
        console.error("> Error en la conexion a la DB.");
        console.error(e);
    }
}