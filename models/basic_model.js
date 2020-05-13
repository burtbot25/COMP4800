const db = require("../util/database");
const mysql = require("mysql2");

exports.getTransitInfo = () => {
    let sql = `SELECT * FROM busStops`;
    return db.execute(sql);
};

exports.getTransitDescription = () => {
    let sql = `SELECT * FROM busDescriptions`;
    return db.execute(sql);
}

exports.getCampusDescription = () => {
    let sql = `SELECT * FROM navCampus`;
    return db.execute(sql);
}

exports.getParkingDescription = () => {
    let sql = `SELECT * FROM parkingDescriptions order by id`;
    return db.execute(sql);
}