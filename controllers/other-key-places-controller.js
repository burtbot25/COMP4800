let other_key_places_model = require("../models/other_key_places_model");

exports.getMap = async (req, res) => {
    var foodInfoData = await other_key_places_model.getFoodInfo();
    var foodInfo = foodInfoData[0];

    var microwavesInfoData = await other_key_places_model.getMicrowaveInfo();
    var microwavesInfo = microwavesInfoData[0]
    var microwavesLocationList = [];
    microwavesInfo.forEach(entry => {
        microwavesLocationList.push(entry.buildingNumber)
    });
    var microwavesLocations = microwavesLocationList.join(",")

    var socialInfoData = await other_key_places_model.getSocialInfo();
    var socialInfo = socialInfoData[0]

    var studyAreasInfoData = await other_key_places_model.getStudyAreasInfo();
    var studyAreasInfo = studyAreasInfoData[0]

    res.render('other-key-places', { 
        otherKeyPlacesCSS: true,
        foodLocations: foodInfo,
        microwavesLocations: microwavesLocations,
        socialLocations: socialInfo,
        studyAreaLocations: studyAreasInfo
    });
};