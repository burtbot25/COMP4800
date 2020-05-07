const db = require("../util/database");
const mysql = require("mysql2");

exports.getSE01 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'SE01'");
}

exports.getSE04 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'SE04'");
}

exports.getSE06 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'SE06'");
}

exports.getSE10 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'SE10'");
}

exports.getSE12 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'SE12'");
}

exports.getSW01 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'SW01'");
}

exports.getSW02 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'SW02'");
}

exports.getSW03 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'SW03'");
}

exports.getNE01 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'NE01'");
}

exports.getNE02 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'NE02'");
}

exports.getNE04 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'NE04'");
}

exports.getNE06 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'NE06'");
}

exports.getNE08 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'NE08'");
}

exports.getNE10 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'NE10'");
}

exports.getNE12 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'NE12'");
}

exports.getNE16 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'NE16'");
}

exports.getNE18 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'NE18'");
}

exports.getNE20 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'NE20'");
}

exports.getNE24 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'NE24'");
}

exports.getNE25 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'NE25'");
}

exports.getNE28 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'NE28'");
}

exports.getNW03 = () => {
  return db.execute("SELECT * FROM buildings WHERE buildingNumber = 'NW03'");
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