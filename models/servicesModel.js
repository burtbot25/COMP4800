const db = require('../util/database');
const mysql = require('mysql2');

exports.getServices = () => {
    return db.execute('SELECT * FROM services ORDER BY serviceName');
};

exports.getServiceGroups = () => {
    return db.execute('SELECT * FROM serviceGroups ORDER BY name');
};
