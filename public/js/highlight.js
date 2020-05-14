$( document ).ready(function() {
   /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
   var dropdown = document.getElementsByClassName("dropdown-btn");
   var i;

   for (i = 0; i < dropdown.length; i++) {
       dropdown[i].addEventListener("click", function () {
           this.classList.toggle("active");
           var dropdownContent = this.nextElementSibling;
           if (dropdownContent.style.display === "block") {
               dropdownContent.style.display = "none";
           } else {
               dropdownContent.style.display = "block";
           }
       });
   }
});
/* John's code for highlighting buildings */
/* Sets what key to use when mapping for mapster*/
var basic_opts = {
    mapKey: 'building',
    staticbuilding: true,
    fill: false,
    stroke: false,
    strokeWidth: 2,
    strokeColor: 'ffea2e',
    isSelectable: false
};

/* starting values for mapster */
var initial_opts = $.extend({}, basic_opts,
    {
        staticbuilding: true,
        fill: false,
        stroke: false,
        strokeWidth: 2,
        strokeColor: 'ffea2e',
        isSelectable: false
    });

/* group selection functions */
function selectSchool(buildings, descriptions) {
    $('area').bind('mouseover', function () {
        $('#campus_entrances_overlay').mapster('tooltip');
    });
    $('#campus_entrances_overlay').mapster(initial_opts)
        .mapster('set', true, buildings, {
            fill: true,
            fillColor: 'ffea2e',
        })
        .mapster('snapshot')
        .mapster('rebind', basic_opts);
    
    buildings = buildings.replace(/,/g, ",#")
    
    $('#' + buildings).bind('mouseover', function () {
        $('#campus_entrances_overlay').mapster('tooltip', this, $(this).attr('alt'));

    });
    
    updateSchoolToolTip(buildings, descriptions);
}

function updateSchoolToolTip(buildings, names) {
    buildings = buildings.split(",#")
    names = names.split(",")

    for (var i = 0; i < buildings.length; i++){
        document.getElementById(buildings[i]).alt = "<b>" + buildings[i] + "</b><br>" + names[i];
    }
}


function selectKeyPlaces(buildings, names, type, description, hyperlink) {
    hideOverlay();
    hideFoodDetails();
    console.log("selectKeyPlaces")
    $('area').bind('mouseover', function () {
        $('#image').mapster('tooltip');
    });

    $('#image').mapster(initial_opts)
        .mapster('set', true, buildings, { // String goes here
            fill: true,
            fillColor: 'ffea2e'
        })
        .mapster('snapshot')
        .mapster('rebind', basic_opts);

    buildings = buildings.split(",")
    buildings = buildings.join(",#")

    $('#' + buildings).bind('mouseover', function () { // ID goes here
        $('#image').mapster('tooltip', this, $(this).attr('alt'));

    });

    updateToolTip(buildings, names);
    if (type == "Bookable Study Areas"){
        showFoodDetails("Bookable Study Areas", description, hyperlink)
    }
}

function updateToolTip(buildings, names) {
    var seen = []

    buildings = buildings.split(",#")
    names = names.split(",")

    for (var i = 0; i < buildings.length; i++){
        var toolTipString = names[i]
        for (var j = 0; j < seen.length; j++){
            if (seen[j].includes(buildings[i])){
                toolTipString = names[i] + "<br>" + seen[j][1];
            }
        }
        document.getElementById(buildings[i]).alt = toolTipString;
        seen.push([buildings[i], toolTipString])

    }
}

function selectMicrowaves(building, names) {
    
    hideOverlay();
    hideFoodDetails();
    console.log("Select Microwaves")
    $('area').bind('mouseover', function () {
        $('#image').mapster('tooltip');
    });
    
    $('#image').mapster(initial_opts)
        .mapster('set', true, building, { // String goes here
            fill: true,
            fillColor: 'ffea2e'
        })
        .mapster('snapshot')
        .mapster('rebind', basic_opts);

    building = building.split(",")
    building = building.join(",#")

    $('#' + building).bind('mouseover', function () { // ID goes here
        $('#image').mapster('tooltip', this, $(this).attr('full'));

    });

    updateToolTip(building, names)

}

function updateFoodToolTips(building, foodPlaceNames){
    var buildings = building.split(",")
    var locations = foodPlaceNames.split(",..,")
    
    for (var i = 0; i < locations.length; i++){
        locations[i] = locations[i].replace(/,/g, "<br>")
    }
    for (var i = 0; i < buildings.length; i++){
        document.getElementById(buildings[i]).alt = locations[i]
    }
    
}

function selectFoods(building, service_name, description, foodLink, foodPlaceNames) {
    console.log("Building: " + building)
    console.log("Service Name: " + service_name)
    console.log("Description: " + description)
    console.log("Food Link: " + foodLink)

    showOverlay()
    updateFoodToolTips(building, foodPlaceNames)
    

    $('area').bind('mouseover', function () {
        $('#image').mapster('tooltip');
    });
    
    foodBuildings = building

    $('#image').mapster(initial_opts)
        .mapster('set', true, foodBuildings, { // String goes here
            fill: false,
            stroke: false,
            fillColor: 'ffea2e'
        })
        .mapster('snapshot')
        .mapster('rebind', basic_opts);

    foodBuildings = foodBuildings.split(",")
    foodBuildings = foodBuildings.join(",#")

    $("#" + foodBuildings).bind('mouseover', function () { // ID goes here
        $('#image').mapster('tooltip', this, $(this).attr('alt'));

    });
    
    showFoodDetails(service_name, description+"", foodLink+"")
    
}

function selectService(building, name, description, link) {
    $('area').bind('mouseover', function () {
        $('#campus_entrances_overlay').mapster('tooltip');
    });
    console.log(building);
    $('#campus_entrances_overlay').mapster(initial_opts)
        .mapster('set', true, building, { // String goes here
            fill: true,
            fillColor: 'ffea2e'
        })
        .mapster('snapshot')
        .mapster('rebind', basic_opts);

    building = building.replace(/,/g, ",#")

    $('#' + building).bind('mouseover', function () { // ID goes here
        $('#campus_entrances_overlay').mapster('tooltip', this, $(this).attr('full'));

    });
//    description = description.replace(/,/g, "\n");
    showDetails(building, name, description, link);
}

function showDetails(name, description, link){
    document.getElementById("details_title").innerText = name
    document.getElementById("details_info").innerText = description
    document.getElementById("details_link").innerText = link
    document.getElementById("details_link").href = link
    document.getElementById("details_link").target = "_blank"
}

function showOverlay(){
    document.getElementById("image").src = "/media/food_map.png"
}


function hideOverlay(){
    document.getElementById("image").src = "/media/burnaby_campus_map.png"
}

function showFoodDetails(service_name, description, foodLink){
    document.getElementById("details_box").style.display = "block"
    document.getElementById("details_title").innerText = service_name
    document.getElementById("details_info").innerText = description
    document.getElementById("details_link").innerText = foodLink
    document.getElementById("details_link").href = foodLink
    document.getElementById("details_link").target = "_blank"
}

function hideFoodDetails(){
    document.getElementById("details_box").style.display = "none"
}

//function showDetails1(building, service_name, description){
//    document.getElementById("details_title").innerText = service_name
//    document.getElementById("details_title").style.fontWeight = "bold"
//    document.getElementById("details_info").innerText = "(currently blank)" + description
//    document.getElementById("details_link").innerText = "(Link Here)"
//    document.getElementById("details_box").style.backgroundColor = "#ffea2e"
//    document.getElementById("details_box").style.color = "#003c71"
//}

function showDetailsTransit(description, nav){
    document.getElementById("details_box").style.display = "block"
    // document.getElementById("details_title").innerText = service_name
    document.getElementById("details_title").style.fontWeight = "bold"
    document.getElementById("details_info").innerText = description
    document.getElementById("details_box").style.backgroundColor = "#ffea2e"
    document.getElementById("details_box").style.color = "#003c71"

    if (nav == true) {
        if (!$(".fa-arrow-right").length) {
            var icon = document.createElement("i");
            icon.setAttribute("class", "fa fa-arrow-right fa-2x");
            document.getElementById("details_box").appendChild(icon);
            $(".fa-arrow-right").click(navArrow);
        }
    } else {
        $(".fa-arrow-right").remove();
    }
}

// this one has a .HTML as the client wanted a clickable link inside the description for this one 
function showDetailsParking(description){
    document.getElementById("details_box").style.display = "block"
    document.getElementById("details_title").style.fontWeight = "bold"
    document.getElementById("details_info").innerHTML = description
    document.getElementById("details_box").style.backgroundColor = "#ffea2e"
    document.getElementById("details_box").style.color = "#003c71"
}

var transit = false;
var busData = [];
function selectTransit() {  
    showBasicOverlay("/media/bus_map.png");
    if (transit == false) {
        fetch("/getTransit")
        .then(res => res.text())
        .then(function (data) {
            data = JSON.parse(data);
            data.forEach(function(item) {
                item.busRoute = item.busRoute.replace(",", "<br>");
                console.log(item.busRoute);
                busData.push({
                    "key": item.id,
                    "toolTip" : item.busRoute
                })
            })
            busOverlay();
            transit = true;
        })
        .catch(function (error) {
            console.log(error);
        });
    } else {
        busOverlay();
    }
    fetch("/getTransitDesc")
    .then(res => res.text())
    .then(function (data) {
        data = JSON.parse(data);
        console.log(data)
        console.log(data[0].description);
        showDetailsTransit(data[0].description);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function busOverlay() {
    $('#image').mapster({
        singleSelect: true,
        fill: false,
        mapKey: 'building',
        fill: false,
        toolTipClose: ['area-mouseout','image-mouseout'],
        clickNavigate: true,           
        showToolTip: true,
        staticState: true,
        areas: busData
    })
}

function showBasicOverlay(source){
    document.getElementById("image").src = source
}


function showBasicOverlay(source){
    document.getElementById("image").src = source
}

function nextIndex(index, arr) {
    index++;
    index = index % arr.length;
    return index;
}


var navIndex = 0;
var navDesc = []
function selectNav() {
    $('img').mapster('unbind');
    hideOverlay();
    if (navDesc.length == 0) {
        fetch("/getCampusDesc")
        .then(res => res.text())
        .then(function (data) {
            data = JSON.parse(data);
            console.log(data)
            navDesc = data; 
            console.log(navDesc[navIndex].buildingNumber)
            selectNavBuildings(navDesc[navIndex].buildingNumber);
            showDetailsTransit(navDesc[navIndex].description, true);
            navIndex = nextIndex(navIndex, navDesc);

        })
        .catch(function (error) {
            console.log(error);
        });

    } else {
        navIndex = 0
        selectNavBuildings(navDesc[navIndex].buildingNumber);
        showDetailsTransit(navDesc[navIndex].description, true);
        navIndex = nextIndex(navIndex, navDesc);
    }
}

function navArrow() {
    selectNavBuildings(navDesc[navIndex].buildingNumber);
    showDetailsTransit(navDesc[navIndex].description, true);
    navIndex = nextIndex(navIndex, navDesc);
}

function selectNavBuildings(buildings) {
    $('area').bind('mouseover', function () {
        $('#image').mapster('tooltip');
    });

    $('#image').mapster(initial_opts)
    .mapster('set', true, buildings, { // String goes here
        fill: true,
        fillColor: 'ffea2e'
    })
    .mapster('snapshot')
    .mapster('rebind', basic_opts);
    console.log($('#CampusSquare').length);
    buildings = buildings.replace(/,/g, ",#")
    console.log(buildings);
    $('#' + buildings).bind('mouseover', function () { // ID goes here
        $('#image').mapster('tooltip', this, $(this).attr('full'));
    });
}

//this has no tooltips enabled, see selectLot for tooltip enabling
function selectParking(stop,key) {
    id = 'image'
    $('area').bind('mouseover', function () {
        $('#'+id).mapster('tooltip');
    });
    $('#'+id).mapster({
        initial_opts,
        mapKey: key,
        strokeWidth:2,
        strokeColor: 'F88017',
        mapValue: 'full',
        showToolTip: true,
        staticState: true,
        fill:false
        }
        )
        .mapster('set', true,stop, { // String goes here
            fill: true,
            fillColor: 'ffea2e'
        })
}
/* start of all the toggling on methods for each of the parking images */ 
function toggleHandicap(){
    let key = 'accessible-key'
        //this is to search in the parkingDescriptions table for the section identifier
    let database_identifier = "accessibleparking"
    document.getElementById("image").src = "/media/overlays/handicap_merged.png"
    grabDescAndSelection(database_identifier,key)
}

function toggleElectricVehicle(){
    let key = 'electric-key'
    let database_identifier = "electricvehicle"
        //this is to search in the parkingDescriptions table for the section identifier
    document.getElementById("image").src = "/media/overlays/ev_parking.png"
    grabDescAndSelection(database_identifier,key)
}

function toggleShareParking(){
    let key = 'share-parking-key'
        //this is to search in the parkingDescriptions table for the section identifier
    let database_identifier = "carshare"
    document.getElementById("image").src = "/media/overlays/car_share_merged.png"
    grabDescAndSelection(database_identifier,key)
}

function toggleMotorcycle(){
    let key = 'motorcycle-key'
    //this is to search in the parkingDescriptions table for the section identifier
    let database_identifier = "motorcycle"
    document.getElementById("image").src = "/media/overlays/motorcycle_merged.png"
    grabDescAndSelection(database_identifier,key)
}

function toggleBikeRepair(){
    let key = 'bike-key'
    let database_identifier = 'bikerepair'
    document.getElementById("image").src = "/media/overlays/bike_repair.png"
    grabDescAndSelection(database_identifier,key)
    
}

function togglePaystation(){
    let key = 'paystation-key'
    let database_identifier = 'paystation'
    document.getElementById("image").src = "/media/overlays/paystation_merged.png"
    grabDescAndSelection(database_identifier,key)
}


function toggleAccessibility(){
    let key = ''
    let database_identifier = 'accessibilityroutes'
    document.getElementById("image").src = "/media/overlays/accessibility_routes.png"
    grabDescAndSelection(database_identifier,key)
}


function selectTiming(){
    let key = ''
    document.getElementById("image").src = "/media/overlays/timing_merged.png"
    database_identifier = 'timing'
    grabDescAndSelection(database_identifier,key)
}

//grabs the description and selection ids from the database
//matching ids will get highlighted on the map
function grabDescAndSelection(database_identifier,key){
    fetch("/getParkingDesc")
    .then(res => res.text())
    .then(function (data) {
        data = JSON.parse(data);
        for(i = 0; i<data.length;i++){
            if(data[i].section == database_identifier ){
                selectParking(data[i].selection,key)
                if(data[i].description !== "" && data[i].description !== null){
                    showDetailsParking(data[i].description)
                } else {
                    hideFoodDetails();
                }
                break;
            }
        }
    })
}


//selects the student parking lots and enables the tooltip
function selectLot() {
    database_identifier = 'studentparking'
    key = 'lot-key'
    id = 'image'
    document.getElementById("image").src = "/media/overlays/parking_merged.png"
    fetch("/getParkingDesc")
    .then(res => res.text())
    .then(function (data) {
        data = JSON.parse(data);
        for(i = 0; i<data.length;i++){
            if(data[i].section == database_identifier ){
                stops =  data[i].selection
                if(data[i].description !== "" && data[i].description !== null){
                    showDetailsParking(data[i].description)
                } else {
                    hideFoodDetails();
                }
                break;
            }
        }
        selectParking(stops,key)
        stops = stops.replace(/,/g, ",#")
        $('#' + stops).bind('mouseover', function () { // ID goes here
            $('#'+id).mapster('tooltip', this, $(this).attr('full'));
        });
    })
    .catch(function (error) {
        console.log(error);
    });
}

function selectCampus(building) {
    // console.log("Building: " + stop)
    $('area').bind('mouseover', function () {
        $('#bus_stops_overlay').mapster('tooltip');
    });
    
    $('#bus_stops_overlay').mapster(initial_opts)
        .mapster('set', true, stops, { // String goes here
            fill: true,
            fillColor: 'ffea2e'
        })
        .mapster('snapshot')
        .mapster('rebind', basic_opts);

    stops = stops.replace(/,/g, ",#")
    console.log(stop);
    $('#' + stops).bind('mouseover', function () { // ID goes here
        $('#bus_stops_overlay').mapster('tooltip', this, $(this).attr('full'));

    });
    bus = bus.replace(",", "\n");
    showDetailsTemp(stop, name, bus)
}


function toggleDropdown(self) {
    console.log(self);  
    $(".dropdown-btn").not(self).next(".dropdown-container").css("display","none");
    $(".dropdown-btn").not(self).next(".dropdown-container").removeClass('active');
}
function toggleDisplay(id){
    console.log(id);
    //$('area').css("display","none")
    $('img').mapster('unbind');
    $('#image,#bus_stops_overlay,#campus_entrances_overlay, #employee_parking_overlay, #first_aid_overlay, #handicap_overlay,#security_overlay,#student_parking_overlay,#visitor_parking_overlay,#food_services_overlay,#bike_overlay,#electrical_vehicle_overlay,#car_share_overlay, #bike_repair_overlay,#pay_station_overlay,#motorcycle_overlay,#timing_overlay').css("display","none")
    $('#'+id.value).css("display","block");

}