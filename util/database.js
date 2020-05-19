const mysql = require('mysql2');

const pool = mysql.createPool({
    host               : 'remotemysql.com',
    waitForConnections : true,
    connectionLimit    : 5,
    user               : 'JLRgmkCfgJ',
    database           : 'JLRgmkCfgJ',
    password           : 'MlR7E18ens'
});

module.exports = pool.promise();