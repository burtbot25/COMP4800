const db = require("../util/database");
const mysql = require("mysql2");

exports.getFoodInfo = () => {
  let sql = `SELECT * FROM foodServices ORDER BY name ASC`;

  return db.execute(sql);
};

exports.getMicrowaveInfo = () => {
  let sql = 'SELECT * FROM microwaves';

  return db.execute(sql);
}

exports.getSocialInfo = () => {
  let sql = 'SELECT * FROM socialLocations ORDER BY name ASC'

  return db.execute(sql);
}

exports.getStudyAreasInfo = () => {
  let sql = 'SELECT * FROM studyAreas ORDER BY name ASC'

  return db.execute(sql);
}