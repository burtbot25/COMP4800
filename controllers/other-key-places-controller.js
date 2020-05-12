let other_key_places_model = require("../models/other_key_places_model");

exports.getMap = async (req, res) => {
    var foodInfoData = await other_key_places_model.getFoodInfo();
    // foodInfo is all rows
    var foodInfo = foodInfoData[0];
    var foodList = [];
    var foodNames = [];

    foodInfo.forEach(row => {
        foodList.push(row.buildingNumber)
        foodNames.push(row.name)
    });

    var foodPlaceNames = createFoodPlaceNamesString(foodList, foodNames)

    var foodLocations = foodList.join(",")
    foodLocations = buildBuildingString(foodLocations)

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
    var studyBuildings = [];
    var studyNames = [];
    studyAreasInfo.forEach(row => {
        studyBuildings.push(row.buildingNumber)
        studyNames.push(row.name)
    });

    res.render('other-key-places', { 
        otherKeyPlacesCSS: true,
        foodLocations: foodLocations,
        microwavesLocations: microwavesLocations,
        socialBuildings: socialBuildings,
        socialNames: socialNames,
        studyBuildings: studyBuildings,
        studyNames: studyNames,
        foodDescription: foodDescription,
        foodLink: foodLink,
        foodPlaceNames: foodPlaceNames
    });
};

function buildBuildingString(buildings){
    var buildingSet = new Set();
    buildings = buildings.split(",")
    buildings.forEach(building => {
        if (building == "NE01"){
            buildingSet.add("FI01")
        } else if (building == "SE01"){
            buildingSet.add("FI02")
        } else if (building == "SE06"){
            buildingSet.add("FI03")
        } else if (building == "SE02"){
            buildingSet.add("FI04")
        } else if (building == "SE14"){
            buildingSet.add("FI05")
        } else if (building == "SE12"){
            buildingSet.add("FI06")
        } else if (building == "SW01"){
            buildingSet.add("FI07")
        } else if (building == "SE40"){
            buildingSet.add("FI08")
        } else if (building == "CARI"){
            buildingSet.add("FI09")
        }
    });

    var buildingArray = Array.from(buildingSet);
    buildingArray = buildingArray.sort()
    buildingArray.join(",")
    return buildingArray + ""
}

function createFoodPlaceNamesString(foodList, foodNames){
    
    var NE01 = [];
    var SE01 = [];
    var SE06 = [];
    var SE02 = [];
    var SE14 = [];
    var SE12 = [];
    var SW01 = [];
    var SE40 = [];
    var CARI = [];
    for (var i = 0; i < foodNames.length; i++){
        if (foodList[i]+"" == "NE01"){
            NE01.push(foodNames[i])
        } else if (foodList[i]+"" == "SE01"){
            SE01.push(foodNames[i])
        } else if (foodList[i]+"" == "SE06"){
            SE06.push(foodNames[i])
        } else if (foodList[i]+"" == "SE02"){
            SE02.push(foodNames[i])
        } else if (foodList[i]+"" == "SE14"){
            SE14.push(foodNames[i])
        } else if (foodList[i]+"" == "SE12"){
            SE12.push(foodNames[i])
        } else if (foodList[i]+"" == "SW01"){
            SW01.push(foodNames[i])
        } else if (foodList[i]+"" == "SE40"){
            SE40.push(foodNames[i])
        } else if (foodList[i]+"" == "CARI"){
            CARI.push(foodNames[i])
        }
    }

    var placesString = NE01.concat("..").concat(SE01).concat("..").concat(SE06).concat("..").concat(SE02).concat("..")
                            .concat(SE14).concat("..").concat(SE12).concat("..").concat(SW01).concat("..")
                            .concat(SE40).concat("..").concat(CARI)
    placesString = placesString.join()
    console.log(placesString)
    return placesString;
}