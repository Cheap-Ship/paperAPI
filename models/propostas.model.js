module.exports = (sequelize, DataTypes) => {
    const Proposta = sequelize.define("propostas", {
        id_proposta:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        id_estado: {
            type: DataTypes.INTEGER
        },
        motivo: {
            type: DataTypes.STRING
        },
        id_criador: {
            type: DataTypes.INTEGER
        },
        id_docente: {
            type: DataTypes.INTEGER
        },
        id_tipo: {
            type: DataTypes.INTEGER
        },
        titulo: {
            type: DataTypes.STRING
        },
        objetivos: {
            type: DataTypes.STRING
        },
        plano: {
            type: DataTypes.STRING
        },
        resultados: {
            type: DataTypes.STRING
        },
        perfil: {
            type: DataTypes.STRING
        },
        dados: {
            type: DataTypes.STRING
        },
        recursos: {
            type: DataTypes.STRING
        },
        data_hora: {
            type: DataTypes.DATE
        },
        ano_letivo: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    });
    return Proposta;
};