const db = require("../util/database");
const mysql = require("mysql2");

exports.getTransitInfo = () => {
    // let sql = `SELECT busStops.id, busStops.name, GROUP_CONCAT(buses.bus) AS bus FROM busStops
    // INNER JOIN buses
    // ON busStops.id = buses.busStops
    // GROUP BY busStops.name, busStops.id`;
    let sql = `SELECT * FROM busStops`;
    return db.execute(sql);
};

exports.getTransitDescription = () => {
    let sql = `SELECT * FROM busDescriptions`;
    return db.execute(sql);
}

exports.getCampusDescription = () => {
    let sql = `SELECT * FROM navCampusDescriptions`;
    return db.execute(sql);
}