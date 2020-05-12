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
    mapKey: 'building'
};

/* starting values for mapster */
var initial_opts = $.extend({}, basic_opts,
    {
        staticbuilding: true,
        fill: false,
        stroke: true,
        strokeWidth: 2,
        strokeColor: 'ffff00',
    });

/* group selection functions */
function selectSchool(buildings, descriptions) {
    $('area').bind('mouseover', function () {
        $('#campus_entrances_overlay').mapster('tooltip');
    });
    $('#campus_entrances_overlay').mapster(initial_opts)
        .mapster('set', true, buildings, {
            fill: true,
            fillColor: 'ffea2e'
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


async function selectKeyPlaces(buildings, names) {
    await hideOverlay();
    await hideFoodDetails();
    console.log("selectKeyPlaces")
    $('area').bind('mouseover', function () {
        $('#image').mapster('tooltip');
    });

    $('#image').mapster(initial_opts)
        .mapster('set', true, buildings, { // String goes here
            fill: true,
            fillColor: 'FF0000'
        })
        .mapster('snapshot')
        .mapster('rebind', basic_opts);

    buildings = buildings.split(",")
    buildings = buildings.join(",#")

    $('#' + buildings).bind('mouseover', function () { // ID goes here
        $('#image').mapster('tooltip', this, $(this).attr('alt'));

    });

    foodBuildings = ["FI01","FI02","FI03","FI04","FI05","FI06","FI07","FI08","FI09"]
    foodBuildings.forEach(id => {
        document.getElementById(id).visibility = "none"
    });

    updateToolTip(buildings, names);
}

function updateToolTip(buildings, names) {
    buildings = buildings.split(",#")
    names = names.split(",")

    for (var i = 0; i < buildings.length; i++){
        document.getElementById(buildings[i]).alt = names[i];
    }
}

async function selectMicrowaves(building) {
    await hideOverlay();
    await hideFoodDetails();
    console.log("Select Microwaves")
    $('area').bind('mouseover', function () {
        $('#image').mapster('tooltip');
    });
    
    $('#image').mapster(initial_opts)
        .mapster('set', true, building, { // String goes here
            fill: true,
            fillColor: 'FF0000'
        })
        .mapster('snapshot')
        .mapster('rebind', basic_opts);

    building = building.split(",")
    building = building.join(",#")

    $('#' + building).bind('mouseover', function () { // ID goes here
        $('#image').mapster('tooltip', this, $(this).attr('full'));

    });

    foodBuildings = ["FI01","FI02","FI03","FI04","FI05","FI06","FI07","FI08","FI09"]
    foodBuildings.forEach(id => {
        document.getElementById(id).visibility = "none"
    });

}

async function selectFoods(building, service_name, description, foodLink) {
    console.log("Building: " + building)
    console.log("Service Name: " + service_name)
    console.log("Description: " + description)
    console.log("Food Link: " + foodLink)
    showOverlay().then(function(res) {
        $('area').bind('mouseover', function () {
            $('#image').mapster('tooltip');
        });
        
        foodBuildings = "FI01,FI02,FI03,FI04,FI05,FI06,FI07,FI08,FI09"
    
        $('#image').mapster(initial_opts)
            .mapster('set', true, foodBuildings, { // String goes here
                fill: false,
                stroke: false,
                fillColor: 'FF0000'
            })
            .mapster('snapshot')
            .mapster('rebind', basic_opts);
    
        foodBuildings = foodBuildings.split(",")
        foodBuildings = foodBuildings.join(",#")
    
        $("#" + foodBuildings).bind('mouseover', function () { // ID goes here
            $('#image').mapster('tooltip', this, $(this).attr('full'));
    
        });
        
        showFoodDetails(service_name, description+"", foodLink+"")
    });
    
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
    description = description.replace(/,/g, "\n");
    showDetails(building, name, description, link);
}

function showDetails(name, description, link){
    document.getElementById("details_box").style.display = "block"
    document.getElementById("details_title").innerText = name
    document.getElementById("details_title").style.fontWeight = "bold"
    document.getElementById("details_info").innerText = description
    document.getElementById("details_link").innerText = link
    document.getElementById("details_link").href = link
    document.getElementById("details_link").target = "_blank"
    document.getElementById("details_box").style.backgroundColor = "#ffea2e"
    document.getElementById("details_box").style.color = "#003c71"
}

async function showOverlay(){
    document.getElementById("image").src = "/media/food_map.png"
}

async function hideOverlay(){
    document.getElementById("image").src = "/media/burnaby_campus_map.png"
}

function showFoodDetails(service_name, description, foodLink){
    document.getElementById("details_box").style.display = "block"
    document.getElementById("details_title").innerText = service_name
    document.getElementById("details_title").style.fontWeight = "bold"
    document.getElementById("details_info").innerText = description
    document.getElementById("details_link").innerText = foodLink
    document.getElementById("details_link").href = foodLink
    document.getElementById("details_link").target = "_blank"
    document.getElementById("details_box").style.backgroundColor = "#ffea2e"
    document.getElementById("details_box").style.color = "#003c71"
}

function hideFoodDetails(){
    document.getElementById("details_box").style.display = "none"
}

function showDetails1(building, service_name, description){
    document.getElementById("details_title").innerText = service_name
    document.getElementById("details_title").style.fontWeight = "bold"
    document.getElementById("details_info").innerText = "(currently blank)" + description
    document.getElementById("details_link").innerText = "(Link Here)"
    document.getElementById("details_box").style.backgroundColor = "#ffea2e"
    document.getElementById("details_box").style.color = "#003c71"
}

function showDetailsTransit(description, nav){
    document.getElementById("details_box").style.display = "block"
    // document.getElementById("details_title").innerText = service_name
    document.getElementById("details_title").style.fontWeight = "bold"
    document.getElementById("details_info").innerText = description
    document.getElementById("details_box").style.backgroundColor = "#ffea2e"
    document.getElementById("details_box").style.color = "#003c71"
    document.getElementById("details_box").style.overflow= "scroll"

    if (nav == true) {
        if (!$(".fa-arrow-right").length) {
            var icon = document.createElement("i");
            icon.setAttribute("class", "fa fa-arrow-right");
            document.getElementById("details_box").appendChild(icon);
            $(".fa-arrow-right").click(navArrow);
        }
    } else {
        $(".fa-arrow-right").remove();
    }
}

function showDetailsParking(description){
    document.getElementById("details_box").style.display = "block"
    // document.getElementById("details_title").innerText = service_name
    document.getElementById("details_title").style.fontWeight = "bold"
    document.getElementById("details_info").innerHTML = description
    document.getElementById("details_box").style.backgroundColor = "#ffea2e"
    document.getElementById("details_box").style.color = "#003c71"
    document.getElementById("details_box").style.overflow= "scroll"
}

var transit = false;
var busData = [];
function selectTransit() {  
    showBasicOverlay("/media/bus_map.png");
    console.log(transit);
    if (transit == false) {
        fetch("/getTransit")
        .then(res => res.text())
        .then(function (data) {
            data = JSON.parse(data);
            data.forEach(function(item) {
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

/*
function selectNav() {
    $('img').mapster('unbind');
    hideOverlay();
    fetch("/getCampusDesc")
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
}*/


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
            // console.log(data[0].description);
            // showDetailsTransit(data[0].description);
            console.log(navDesc[navIndex].buildingNumber)
            //selectNavBuildings('CampusSquare')
            selectNavBuildings(navDesc[navIndex].buildingNumber);
            showDetailsTransit(navDesc[navIndex].description, true);
            navIndex = nextIndex(navIndex, navDesc);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

function navArrow() {
    selectNavBuildings(navDesc[navIndex].buildingNumber);
    showDetailsTransit(navDesc[navIndex].description, true);
    navIndex = nextIndex(navIndex, navDesc);
    document.getElementById("details_box").scrollTop = 0;
}

function selectNavBuildings(buildings) {
    $('area').bind('mouseover', function () {
        $('#image').mapster('tooltip');
    });

    $('#image').mapster(initial_opts)
    .mapster('set', true, buildings, { // String goes here
        fill: true,
        fillColor: 'FF0000'
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


function selectParking(id,stop,key) {
    console.log(id);
    console.log("Building: " + stop)
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

function toggleHandicap(){
    let key = 'accessible-key'
    let stops = 'HC01,HC02,HC03,HC04,HC05,HC06,HC07,HC08,HC09,HC10,HC11,HC12,HC13,HC14,HC15,HC16,HC17,HC18,HC19,HC20,HC21,HC22,HC23,HC24,HC25,HC26'
    let id = 'image'
    document.getElementById("image").src = "/media/overlays/handicap_merged.png"
    selectParking(id,stops,key)
    hideFoodDetails();
}

function toggleElectricVehicle(){
    let stops = 'EV1,EV2,EV3,EV4,EV5'
    let key = 'electric-key'
    let id = 'image'
    document.getElementById("image").src = "/media/overlays/ev_parking.png"
    selectParking(id,stops,key)
    hideFoodDetails();
}

function toggleShareParking(){
    let key = 'share-parking-key'
    let stops = "CS1,CS2,CS3"
    let id = 'image'
    document.getElementById("image").src = "/media/overlays/car_share_parking.png"
    selectParking(id,stops,key)
    hideFoodDetails();
}

function togglePaystation(){
    let key = 'paystation-key'
    let stops = 'PS1,PS2,PS3,PS4,PS5,PS6,PS7,PS8,PS9,PS10'
    let id = 'image'
    document.getElementById("image").src = "/media/overlays/paystation_overlay.png"
    selectPaystation(id,stops,key)
}

function toggleMotorcycle(){
    let key = 'motorcycle-key'
    let stops = 'MC1,MC2,MC3,MC4,MC5,MC6,MC7,MC8'
    let id = 'image'
    document.getElementById("image").src = "/media/overlays/motorcycle_overlay.png"
    selectParking(id,stops,key)
    hideFoodDetails();
}

function toggleBikeRepair(){
    let key = 'bike-key'
    let stops = 'BR1,BR2,BR3,BR4'
    let id = 'image'
    document.getElementById("image").src = "/media/overlays/bike_repair.png"
    selectParking(id,stops,key)
    hideFoodDetails();
    
}

function toggleAccessibility(){
    let key = ''
    let stops = ''
    let id = 'image'
    document.getElementById("image").src = "/media/overlays/accessibility_routes.png"
    
    selectParking(id,stops,key)
    hideFoodDetails();
    
}



function selectLot() {
    let key = 'lot-key'
    let stop = 'LOTA,LOTB,LOTD,LOTF,LOTE,LOTG,LOTK,LOTL,LOTJ,LOTN,LOTQ,LOTS,LOTS2,LOTM,LOTH,LOTO,house'
    let id = 'image'
    document.getElementById("image").src = "/media/overlays/parking_merged.png"


    console.log("Building: " + stop)
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

    stop = stop.replace(/,/g, ",#")
    $('#' + stop).bind('mouseover', function () { // ID goes here
        $('#'+id).mapster('tooltip', this, $(this).attr('full'));

    });
    showDetailsTransit("While there are lots of parking spaces available at the Burnaby Campus, you’ll want to make sure that you are aware of which spaces are student parking. Here’s some tips to make sure you have a good parking experience: \n   - Always make sure to read the parking signage to avoid getting a ticket \n   - Bring a credit card to pay for your parking or pre-purchase a parking pass online")
}


function selectPaystation(id,stop,key) {
    
    console.log("Building: " + stop)
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
    showDetailsParking("Pay stations are conveniently located near each of the campus parking lots. Pay stations accept credit cards only, so be sure to have a card on hand or <a href='https://verrus.com/Permits/default.aspx?r='>pre-purchase a parking permit</a> before arriving on campus. Alternatively, students can also <a href='https://www.paybyphone.com/'>pay through the paybyphone app</a>.")
}


function selectCampus(building) {
    // console.log("Building: " + stop)
    $('area').bind('mouseover', function () {
        $('#bus_stops_overlay').mapster('tooltip');
    });
    
    $('#bus_stops_overlay').mapster(initial_opts)
        .mapster('set', true, stop, { // String goes here
            fill: true,
            fillColor: 'FF0000'
        })
        .mapster('snapshot')
        .mapster('rebind', basic_opts);

    stop = stop.replace(/,/g, ",#")
    console.log(stop);
    $('#' + stop).bind('mouseover', function () { // ID goes here
        $('#bus_stops_overlay').mapster('tooltip', this, $(this).attr('full'));

    });
    bus = bus.replace(",", "\n");
    showDetailsTemp(stop, name, bus)
}

function selectTiming(){
    let key = ''
    let stops = ''
    let id = 'image'
    document.getElementById("image").src = "/media/overlays/timing_merged.png"
    selectParking(id,stops,key)
    
    showDetailsTransit("Although the Burnaby Campus may seem large on a map, it’s a lot faster to get from one end of campus to the other than you might think. Believe it or not, it takes only 10 minutes to walk from NE01 to SE16 or from Willingdon Avenue to Wayburne Drive. ")
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