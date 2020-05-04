const db = require("../util/database");
const mysql = require("mysql2");

exports.getTransitInfo = () => {
    let sql = `SELECT busStops.id, busStops.name, GROUP_CONCAT(buses.bus) AS bus FROM busStops
    INNER JOIN buses
    ON busStops.id = buses.busStops
    GROUP BY busStops.name, busStops.id`;
    return db.execute(sql);
};