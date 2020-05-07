let other_key_places_model = require("../models/other_key_places_model");

exports.getMap = async (req, res) => {
    var foodInfoData = await other_key_places_model.getFoodInfo();
    // foodInfo is all rows
    var foodInfo = foodInfoData[0];
    var foodList = [];
    foodInfo.forEach(row => {
        foodList.push(row.buildingNumber)
    });
    var foodLocations = foodList.join(",")

    var foodDescription = await other_key_places_model.getFoodDescription()
    foodDescription = foodDescription[0][0].description

    // currently only gets the first link in the DB
    var foodLink = await other_key_places_model.getFoodLinks()
    foodLink = foodLink[0][0].link

    var microwavesInfoData = await other_key_places_model.getMicrowaveInfo();
    var microwavesInfo = microwavesInfoData[0]
    var microwavesLocationList = [];
    microwavesInfo.forEach(row => {
        microwavesLocationList.push(row.buildingNumber)
    });
    var microwavesLocations = microwavesLocationList.join(",")

    var socialInfoData = await other_key_places_model.getSocialInfo();
    var socialInfo = socialInfoData[0]
    var socialBuildings = [];
    var socialNames = [];
    socialInfo.forEach(row => {
        socialBuildings.push(row.buildingNumber);
        socialNames.push(row.names)
    });

    socialBuildings.join()
    socialNames.join()

    var studyAreasInfoData = await other_key_places_model.getStudyAreasInfo();
    var studyAreasInfo = studyAreasInfoData[0]

    res.render('other-key-places', { 
        otherKeyPlacesCSS: true,
        foodLocations: foodLocations,
        microwavesLocations: microwavesLocations,
        socialBuildings: socialBuildings,
        socialNames: socialNames,
        studyAreaLocations: studyAreasInfo,
        foodDescription: foodDescription,
        foodLink: foodLink
    });
};