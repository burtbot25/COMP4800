const db = require("../util/database");
const mysql = require("mysql2");

exports.getBusinessSchool = () => {
    return db.execute("SELECT * FROM businessSchool");
}

exports.getComputingSchool = () => {
    return db.execute("SELECT * FROM computingSchool");
}

exports.getConstructionSchool = () => {
    return db.execute("SELECT * FROM constructionSchool");
}

exports.getEnergySchool = () => {
    return db.execute("SELECT * FROM energySchool");
}

exports.getHealthSchool = () => {
    return db.execute("SELECT * FROM healthSchool");
}

exports.getTransportationSchool = () => {
    return db.execute("SELECT * FROM transportationSchool");
}