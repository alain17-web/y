
require('dotenv').config();

const {DB_USER,DB_PWD,DB_NAME} = process.env

const sqlConfig = {
    user: DB_USER,
    password: DB_PWD,
    database: DB_NAME,
    server: 'localhost',
    pool: {
        max:10,
        min: 0,
        idleTimeoutMillis: 300000
    },
    options: {
        trustServerCertificate : true
    }


}

module.exports = sqlConfig