const db = require("../util/database");
const mysql = require("mysql2");

exports.getBusinessBuildings = () => {
  return db.execute("SELECT * FROM buildings WHERE description LIKE '%School of Business%'");
}

exports.getComputingBuildings = () => {
  return db.execute("SELECT * FROM buildings WHERE description LIKE '%School of Computing%'");
}

exports.getConstructionBuildings = () => {
  return db.execute("SELECT * FROM buildings WHERE description LIKE '%School of Construction%'");
}

exports.getEnergyBuildings = () => {
  return db.execute("SELECT * FROM buildings WHERE description LIKE '%School of Energy%'");
}

exports.getHealthSciBuildings = () => {
  return db.execute("SELECT * FROM buildings WHERE description LIKE '%School of Health%'");
}

exports.getTransportationBuildings = () => {
  return db.execute("SELECT * FROM buildings WHERE description LIKE '%School of Transportation%'");
}

exports.getAllBusiness = () => {
  return db.execute("SELECT * FROM schools WHERE schoolName = 'School of Business'");
}

exports.getAllComputing = () => {
  return db.execute("SELECT * FROM schools WHERE schoolName = 'School of Computing and Academic Studies'");
}

exports.getAllConstruction = () => {
  return db.execute("SELECT * FROM schools WHERE schoolName = 'School of Construction and the Environment'");    
}

exports.getAllEnergy = () => {
  return db.execute("SELECT * FROM schools WHERE schoolName = 'School of Energy'");    
}

exports.getAllHealthSci = () => {
  return db.execute("SELECT * FROM schools WHERE schoolName = 'School of Health Sciences'");    
}

exports.getAllTransportation = () => {
  return db.execute("SELECT * FROM schools WHERE schoolName = 'School of Transportation'");    
}