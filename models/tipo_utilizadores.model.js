module.exports = (sequelize, DataTypes) => {
    const Tipo_utilizador = sequelize.define("tipo_utilizadores", {
        id_tipo:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        tipo: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    });
    return Tipo_utilizador;
};