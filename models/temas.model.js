module.exports = (sequelize, DataTypes) => {
    const Tema = sequelize.define("temas", {
        id_tema:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        tema: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    });
    return Tema;
};