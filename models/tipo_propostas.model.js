module.exports = (sequelize, DataTypes) => {
    const Tipo_proposta = sequelize.define("tipo_propostas", {
        id_tipo:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        proposta: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    });
    return Tipo_proposta;
};