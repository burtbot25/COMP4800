let foodModel = require("../models/food_model");

exports.getMap = async (req, res) => {
    var foodInfoData = await foodModel.getFoodInfo();
    console.log("FoodInfoData: " + foodInfoData)
    var foodInfo = foodInfoData[0];

    res.render('other-key-places', { 
        otherKeyPlacesCSS: true,
        foodLocations: foodInfo,
    });
};