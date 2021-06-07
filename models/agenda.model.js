module.exports = (sequelize, DataTypes) => {
    const Agenda = sequelize.define("agenda", {
        id_utilizador:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        id_convidado: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        data_hora: {
            type: DataTypes.DATE
        },
        detalhes: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    });
    return Agenda;
};