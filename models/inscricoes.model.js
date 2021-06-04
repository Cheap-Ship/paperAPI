module.exports = (sequelize, DataTypes) => {
    const Inscricao = sequelize.define("inscricoes", {
        id_inscricao:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        id_utilizador:{
            type: DataTypes.INTEGER
        },
        id_proposta:{
            type: DataTypes.INTEGER
        },
        id_estado:{
            type: DataTypes.INTEGER
        },
        preferencia:{
            type: DataTypes.INTEGER
        },
        ano_letivo: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    });
    return Inscricao;
};