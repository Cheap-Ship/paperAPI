module.exports = (sequelize, DataTypes) => {
    const Estagio = sequelize.define("estagio", {
        id_proposta:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        id_empresa: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nome_tutor: {
            type: DataTypes.STRING
        },
        contacto_tutor: {
            type: DataTypes.INTEGER
        },
        cargo_tutor: {
            type: DataTypes.STRING
        },
        correio_tutor: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    });
    return Estagio;
};