const db = require("../util/database");
const mysql = require("mysql2");

exports.getBusinessSchool = () => {
  return db.execute("SELECT * FROM buildings WHERE description LIKE '%School of Business%'");
}

exports.getComputingSchool = () => {
  return db.execute("SELECT * FROM buildings WHERE description LIKE '%School of Computing%'");
}

exports.getConstructionSchool = () => {
  return db.execute("SELECT * FROM buildings WHERE description LIKE '%School of Construction%'");
}

exports.getEnergySchool = () => {
  return db.execute("SELECT * FROM buildings WHERE description LIKE '%School of Energy%'");
}

exports.getHealthSciSchool = () => {
  return db.execute("SELECT * FROM buildings WHERE description LIKE '%School of Health%'");
}

exports.getTransportationSchool = () => {
  return db.execute("SELECT * FROM buildings WHERE description LIKE '%School of Transportation%'");
}

