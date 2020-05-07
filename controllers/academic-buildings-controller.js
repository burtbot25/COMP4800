let schoolModel = require("../models/academic_schools_model");

exports.getMap = async (req, res) => {
    var SE06Data = await schoolModel.getSE06();
    var SE10Data = await schoolModel.getSE10();
    var SE12Data = await schoolModel.getSE12();
    var SW02Data = await schoolModel.getSW02();
    var SW03Data = await schoolModel.getSW03();
    
    var computingData = await schoolModel.getComputingBuildings();
    var constructionData = await schoolModel.getConstructionBuildings();
    var energyData = await schoolModel.getEnergyBuildings();
    var healthData = await schoolModel.getHealthSciBuildings();
    var transportationData = await schoolModel.getTransportationBuildings();
    
    var businessAll = await schoolModel.getAllBusiness();
    var computingAll = await schoolModel.getAllComputing();
    var constructionAll = await schoolModel.getAllConstruction();
    var energyAll = await schoolModel.getAllEnergy();
    var healthAll = await schoolModel.getAllHealthSci();
    var transportationAll = await schoolModel.getAllTransportation();
    
    res.render('academic-buildings', { 
        academicBuildingsCSS: true,
        SE06School: SE06Data[0],
        SE10School: SE10Data[0],
        SE12School: SE12Data[0],
        SW02School: SW02Data[0],
        SW03School: SW03Data[0],
        computingSchool: computingData[0],
        constructionSchool: constructionData[0],
        energySchool: energyData[0],
        healthSciSchool: healthData[0],
        transportationSchool: transportationData[0],
        businessAllBuildings: businessAll[0],
        computingAllBuildings: computingAll[0],
        constructionAllBuildings: constructionAll[0],
        energyAllBuildings: energyAll[0],
        healthAllBuildings: healthAll[0],
        transportationAllBuildings: transportationAll[0]
    });
};


 