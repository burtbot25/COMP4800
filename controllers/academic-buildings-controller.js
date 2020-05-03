let schoolModel = require("../models/academic_schools_model");

exports.getMap = async (req, res) => {
    var businessData = await schoolModel.getBusinessSchool();
    var computingData = await schoolModel.getComputingSchool();
    var constructionData = await schoolModel.getConstructionSchool();
    var energyData = await schoolModel.getEnergySchool();
    var healthData = await schoolModel.getHealthSciSchool();
    var transportationData = await schoolModel.getTransportationSchool();
    
    res.render('academic-buildings', { 
        academicBuildingsCSS: true,
        businessSchool: businessData[0],
        computingSchool: computingData[0],
        constructionSchool: constructionData[0],
        energySchool: energyData[0],
        healthSciSchool: healthData[0],
        transportationSchool: transportationData[0]
    });
};


 