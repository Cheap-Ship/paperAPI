const config = {
    HOST: process.env.DB_HOST || 'freedb.tech',
    USER: process.env.DB_USER || 'freedbtech_paperAPI',
    PASSWORD: process.env.DB_PASSWORD || '4CTDywQ@mD8eg9!',
    DB: process.env.DB_NAME || 'freedbtech_paperDB',
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
module.exports = config;