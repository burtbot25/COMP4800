let schoolModel = require("../models/academic_schools_model");

exports.getMap = async (req, res) => {
    res.render('academic-buildings', { academicBuildingsCSS: true });
};
    
exports.getSchoolsData = async (req, res) => {
    var businessData = await schoolModel.getBusinessSchool();
    var businessInfo = businessData[0];
    var businessBuildings = [];
    var businessDescriptions = [];
    businessInfo.forEach(row => {
        businessBuildings.push(row.buildingNumber);
        businessDescriptions.push(row.description);
    });
    businessBuildings.join();
    businessDescriptions.join();
    
    var computingData = await schoolModel.getComputingSchool();
    var computingInfo = computingData[0];
    var computingBuildings = [];
    var computingDescriptions = [];
    computingInfo.forEach(row => {
        computingBuildings.push(row.buildingNumber);
        computingDescriptions.push(row.description);
    });
    computingBuildings.join();
    computingDescriptions.join();
    
    var constructionData = await schoolModel.getConstructionSchool();
    var constructionInfo = constructionData[0];
    var constructionBuildings = [];
    var constructionDescriptions = [];
    constructionInfo.forEach(row => {
        constructionBuildings.push(row.buildingNumber);
        constructionDescriptions.push(row.description);
    });
    constructionBuildings.join();
    constructionDescriptions.join();
    
    var energyData = await schoolModel.getEnergySchool();
    var energyInfo = energyData[0];
    var energyBuildings = [];
    var energyDescriptions = [];
    energyInfo.forEach(row => {
        energyBuildings.push(row.buildingNumber);
        energyDescriptions.push(row.description);
    });
    energyBuildings.join();
    energyDescriptions.join();
    
    var healthData = await schoolModel.getHealthSchool();
    var healthInfo = healthData[0];
    var healthBuildings = [];
    var healthDescriptions = [];
    healthInfo.forEach(row => {
        healthBuildings.push(row.buildingNumber);
        healthDescriptions.push(row.description);
    });
    healthBuildings.join();
    healthDescriptions.join();
    
    var transportationData = await schoolModel.getTransportationSchool();
    var transportationInfo = transportationData[0];
    var transportationBuildings = [];
    var transportationDescriptions = [];
    transportationInfo.forEach(row => {
        transportationBuildings.push(row.buildingNumber);
        transportationDescriptions.push(row.description);
    });
    transportationBuildings.join();
    transportationDescriptions.join();
    
    
    res.json({
        businessBuildings: businessBuildings,
        businessDescriptions: businessDescriptions,
        computingBuildings: computingBuildings,
        computingDescriptions: computingDescriptions,
        constructionBuildings: constructionBuildings,
        constructionDescriptions: constructionDescriptions,
        energyBuildings: energyBuildings,
        energyDescriptions: energyDescriptions,
        healthBuildings: healthBuildings,
        healthDescriptions: healthDescriptions,
        transportationBuildings: transportationBuildings,
        transportationDescriptions: transportationDescriptions
    });
};