const config = {
    HOST: process.env.DB_HOST || 'freedb.tech',
    USER: process.env.DB_USER || 'freedbtech_paperAPI',
    PASSWORD: process.env.DB_PASSWORD || '4CTDywQ@mD8eg9!',
    DB: process.env.DB_NAME || 'freedbtech_paperDB',
    dialect: "mysql",
    // pool is optional, it will be used for Sequelize connection pool configuration
    pool: {
        max: 5, //maximum number of connections in pool
        min: 0, //minimum number of connections in pool
        acquire: 30000,//maximum time (ms), that pool will try to get connection before throwing error
        idle: 10000 //maximum time (ms) that a connection can be idle before being released
    }
};
module.exports = config;