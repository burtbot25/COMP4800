const servicesModel = require('../models/servicesModel');

exports.getMap = (req, res) => {
    res.render('services-supports', { servicesSupportsCSS: true });
};

exports.getServicesData = async (req, res) => {
    let services = await servicesModel.getServices();
    let serviceGroups = await servicesModel.getServiceGroups();
    res.json({ services: services, serviceGroups: serviceGroups });
};
