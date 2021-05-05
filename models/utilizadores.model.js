module.exports = (sequelize, DataTypes) => {
    const Estado = sequelize.define("utilizadores", {
        id_utilizador:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        id_estado: {
            type: DataTypes.INTEGER
        },
        nome: {
            type: DataTypes.STRING
        },
        apelido: {
            type: DataTypes.STRING
        },
        correio: {
            type: DataTypes.STRING
        },
        passe: {
            type: DataTypes.STRING
        },
        id_tipo: {
            type: DataTypes.INTEGER
        },
        numero_estudante: {
            type: DataTypes.INTEGER
        },
        cca: {
            type: DataTypes.BOOLEAN
        },
        foto: {
            type: DataTypes.STRING
        },
        cv: {
            type: DataTypes.STRING
        },
        portfolio: {
            type: DataTypes.STRING
        },
        facebook: {
            type: DataTypes.STRING
        },
        instagram: {
            type: DataTypes.STRING
        },
        github: {
            type: DataTypes.STRING
        },
        discord: {
            type: DataTypes.STRING
        },
        ano_letivo: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    });
    return Estado;
};