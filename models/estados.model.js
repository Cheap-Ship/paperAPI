module.exports = (sequelize, DataTypes) => {
    const Estado = sequelize.define("estados", {
        id_estado:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        estado: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    });
    return Estado;
};