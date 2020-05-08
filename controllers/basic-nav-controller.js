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

exports.getParking = async (req, res) => {
    let transitData = await basicModel.getTransitInfo();
    busData = transitData[0]
    res.render('basic-nav', { basicNavCSS: true });
};

exports.getTransitDesc = async (req, res) => {
    let transitData = await basicModel.getTransitDescription();
    busData = transitData[0]
    res.send(busData);
};