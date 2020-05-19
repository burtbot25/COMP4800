let basicModel = require("../models/basic_model");
exports.getMap = async (req, res) => {
    let transitData = await basicModel.getTransitInfo();
    busData = transitData[0]
    res.render('basic-nav', { basicNavCSS: true, transit: busData });
};

exports.getTransit = async (req, res) => {
    let transitData = await basicModel.getTransitInfo();
    busData = transitData[0]
    res.send(busData);
};

exports.getParkingDesc = async (req, res) => {
    let parkingData = await basicModel.getParkingDescription();
    parkingDescriptions = parkingData[0]
    res.send(parkingDescriptions)
};

exports.getTransitDesc = async (req, res) => {
    let transitData = await basicModel.getTransitDescription();
    busData = transitData[0]
    res.send(busData);
};

exports.getCampusDesc = async (req, res) => {
    let campusData = await basicModel.getCampusDescription();
    navCampusData = campusData[0]
    res.send(navCampusData);
};