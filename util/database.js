const mysql = require('mysql2');

const pool = mysql.createPool({
    host               : 'remotemysql.com',
    waitForConnections : true,
    connectionLimit    : 5,
    user               : '<insert username>',
    database           : '<insert database>',
    password           : '<insert password>'
});

module.exports = pool.promise();
