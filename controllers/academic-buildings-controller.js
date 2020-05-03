let schoolModel = require("../models/academic_schools_model");

exports.getMap = async (req, res) => {
    var businessData = await schoolModel.getBusinessBuildings();
    var computingData = await schoolModel.getComputingBuildings();
    var constructionData = await schoolModel.getConstructionBuildings();
    var energyData = await schoolModel.getEnergyBuildings();
    var healthData = await schoolModel.getHealthSciBuildings();
    var transportationData = await schoolModel.getTransportationBuildings();
    
    var businessAll = await schoolModel.getAllBusiness();
    
    res.render('academic-buildings', { 
        academicBuildingsCSS: true,
        businessSchool: businessData[0],
        computingSchool: computingData[0],
        constructionSchool: constructionData[0],
        energySchool: energyData[0],
        healthSciSchool: healthData[0],
        transportationSchool: transportationData[0],
        businessAllBuildings: businessAll[0]
    });
};


 