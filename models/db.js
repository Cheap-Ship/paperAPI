const dbConfig = require('../config/db.config.js');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
host: dbConfig.HOST, dialect: dbConfig.dialect,
pool: {
    max: dbConfig.pool.max, min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire, idle: dbConfig.pool.idle
}
});

sequelize.authenticate()
.then(() => { console.log('Connection has been established successfully.'); })
.catch(err => { console.error('Unable to connect to the database:', err); });

const db = {};
db.sequelize = sequelize;

db.estado = require("./estados.model.js")(sequelize, DataTypes);
db.utilizador = require("./utilizadores.model.js")(sequelize, DataTypes);
db.tipo_utilizador = require("./tipo_utilizadores.model.js")(sequelize, DataTypes);
db.tipo_proposta = require("./tipo_propostas.model.js")(sequelize, DataTypes);
db.tema = require("./temas.model.js")(sequelize, DataTypes);
db.agenda = require("./agenda.model.js")(sequelize, DataTypes);
db.empresa = require("./empresas.model.js")(sequelize, DataTypes);
db.estagio = require("./estagios.model.js")(sequelize, DataTypes);
db.inscricao = require("./inscricoes.model.js")(sequelize, DataTypes);
db.notificacao = require("./notificacoes.model.js")(sequelize, DataTypes);
db.proposta = require("./propostas.model.js")(sequelize, DataTypes);

module.exports = db;