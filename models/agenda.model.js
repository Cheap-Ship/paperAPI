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
        data: {
            type: DataTypes.DATEONLY,
            primaryKey: true
        },
        hora: {
            type: DataTypes.TIME
        },
        detalhes: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    });
    return Agenda;
};