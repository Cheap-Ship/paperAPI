module.exports = (sequelize, DataTypes) => {
    const Notificacao = sequelize.define("notificacoes", {
        id_notificacao:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        id_utilizador:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        id_tema:{
            type: DataTypes.INTEGER
        },
        texto: {
            type: DataTypes.STRING
        },
        data_hora: {
            type: DataTypes.DATE
        }
    }, {
        timestamps: false
    });
    return Notificacao;
};