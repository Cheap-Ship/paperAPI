const config = {
    /* don't expose password or any sensitive info, done only for demo */
    // if environment variables are not defined, use default values
    HOST: process.env.DB_HOST || 'freedb.tech',
    USER: process.env.DB_USER || 'freedbtech_paperAPI',
    PASSWORD: process.env.DB_PASSWORD || '4CTDywQ@mD8eg9!',
    DB: process.env.DB_NAME || 'freedbtech_paperDB'
    };
    module.exports = config;