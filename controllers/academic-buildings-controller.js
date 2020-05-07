let schoolModel = require("../models/academic_schools_model");

exports.getMap = async (req, res) => {
    var SE01Data = await schoolModel.getSE01();
    var SE04Data = await schoolModel.getSE04();
    var SE06Data = await schoolModel.getSE06();
    var SE10Data = await schoolModel.getSE10();
    var SE12Data = await schoolModel.getSE12();
    var SW01Data = await schoolModel.getSW01();
    var SW02Data = await schoolModel.getSW02();
    var SW03Data = await schoolModel.getSW03();
    var NE01Data = await schoolModel.getNE01();
    var NE02Data = await schoolModel.getNE02();
    var NE04Data = await schoolModel.getNE04();
    var NE06Data = await schoolModel.getNE06();
    var NE08Data = await schoolModel.getNE08();    
    var NE10Data = await schoolModel.getNE10();
    var NE12Data = await schoolModel.getNE12();
    var NE16Data = await schoolModel.getNE16();
    var NE18Data = await schoolModel.getNE18();
    var NE20Data = await schoolModel.getNE20();
    var NE24Data = await schoolModel.getNE24();
    var NE25Data = await schoolModel.getNE25();
    var NE28Data = await schoolModel.getNE28();
    var NW03Data = await schoolModel.getNW03();
    var businessAll = await schoolModel.getAllBusiness();
    var computingAll = await schoolModel.getAllComputing();
    var constructionAll = await schoolModel.getAllConstruction();
    var energyAll = await schoolModel.getAllEnergy();
    var healthAll = await schoolModel.getAllHealthSci();
    var transportationAll = await schoolModel.getAllTransportation();
    
    res.render('academic-buildings', { 
        academicBuildingsCSS: true,
        SE01School: SE01Data[0],
        SE04School: SE04Data[0],
        SE06School: SE06Data[0],
        SE10School: SE10Data[0],
        SE12School: SE12Data[0],
        SW01School: SW01Data[0],
        SW02School: SW02Data[0],
        SW03School: SW03Data[0],
        NE01School: NE01Data[0],
        NE02School: NE02Data[0],
        NE04School: NE04Data[0],
        NE06School: NE06Data[0],
        NE08School: NE08Data[0],
        NE10School: NE10Data[0],
        NE16School: NE16Data[0],
        NE18School: NE18Data[0],
        NE20School: NE20Data[0],
        NE24School: NE24Data[0],
        NE25School: NE25Data[0],
        NE28School: NE28Data[0],
        NE12School: NE12Data[0],
        NW03School: NW03Data[0],
        businessAllBuildings: businessAll[0],
        computingAllBuildings: computingAll[0],
        constructionAllBuildings: constructionAll[0],
        energyAllBuildings: energyAll[0],
        healthAllBuildings: healthAll[0],
        transportationAllBuildings: transportationAll[0]
    });
};


 