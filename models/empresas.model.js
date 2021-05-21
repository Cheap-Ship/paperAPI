module.exports = (sequelize, DataTypes) => {
    const Empresa = sequelize.define("empresas", {
        id_empresa:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING
        },
        correio: {
            type: DataTypes.STRING
        },
        morada: {
            type: DataTypes.STRING
        },
        website: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    });
    return Empresa;
};