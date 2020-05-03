const db = require("../util/database");
const mysql = require("mysql2");

exports.getFoodInfo = () => {
  let sql = `SELECT * FROM foodServices`;

  return db.execute(sql);
};