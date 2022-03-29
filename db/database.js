const pg = require('pg')

const pool = new pg.Pool({
    "user": "postgres",
    "password": "root",
    "database": "test",
    "host": "localhost",
    "port": 5432

})

module.exports = pool;