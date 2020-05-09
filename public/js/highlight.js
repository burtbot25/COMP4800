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
function selectNE() {
    $('area').bind('mouseover', function () {
        $('img').mapster('tooltip');
    });
    $('img').mapster(initial_opts)
        .mapster('set', true, 'NE09,NE07,NE10,NE12,NE08,NE06,NE28,NE16,NE18,NE24,NE22,NE20', {
            fill: true,
            fillColor: 'FFFF00'
        })
        .mapster('snapshot')
        .mapster('rebind', basic_opts);
    $('#NE09,#NE07,#NE10,#NE12,#NE08,#NE06,#NE28,#NE16,#NE18,#NE24,#NE22,#NE20').bind('mouseover', function () {
        $('img').mapster('tooltip', this, $(this).attr('full'));

    });

}

function selectSE() {
    $('area').bind('mouseover', function () {
        $('img').mapster('tooltip');
    });
    $('img').mapster(initial_opts)
        .mapster('set', true, 'SE19,SE30,SE40,SE41,SE42,SE50', {
            fill: true,
            fillColor: '800000'
        })
        .mapster('snapshot')
        .mapster('rebind', basic_opts);
    $('#SE19,#SE30,#SE40,#SE41,#SE42,#SE50').bind('mouseover', function () {
        $('img').mapster('tooltip', this, $(this).attr('full'));

    });
}

function selectSW() {
    $('area').bind('mouseover', function () {
        $('img').mapster('tooltip');
    });
    $('img').mapster(initial_opts)
        .mapster('set', true, 'SW01,SW02,SW03,SW05,SW09,SW10,SW11,SW12,SW13,SW14,SW15,SW16', {
            fill: true,
            fillColor: '138C40'
        })
        .mapster('snapshot')
        .mapster('rebind', basic_opts);
    $('#SW01,#SW02,#SW03,#SW05,#SW09,#SW10,#SW11,#SW12,#SW13,#SW14,#SW15,#SW16').bind('mouseover', function () {
        $('img').mapster('tooltip', this, $(this).attr('full'));

    });
}

function selectCARI() {
    $('area').bind('mouseover', function () {
        $('img').mapster('tooltip');
    });
    $('img').mapster(initial_opts)
        .mapster('set', true, 'CARI', {
            fill: true,
            fillColor: 'FF0000'
        })
        .mapster('snapshot')
        .mapster('rebind', basic_opts);
    $('#CARI').bind('mouseover', function () {
        $('img').mapster('tooltip', this, $(this).attr('full'));

    });
}

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
/* end group selection functions */

function selectKeyPlaces(buildings, names) {
    hideOverlay();
    hideFoodDetails();
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

function selectMicrowaves(building) {
    hideOverlay();
    hideFoodDetails();
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

function selectFoods(building, service_name, description, foodLink) {
    console.log("Building: " + building)
    console.log("Service Name: " + service_name)
    console.log("Description: " + description)
    console.log("Food Link: " + foodLink)
    showOverlay();
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

function showOverlay(){
    document.getElementById("image").src = "/media/food_map.png"
}

function hideOverlay(){
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

function showDetailsTransit(description){
    document.getElementById("details_box").style.display = "block"
    // document.getElementById("details_title").innerText = service_name
    document.getElementById("details_title").style.fontWeight = "bold"
    document.getElementById("details_info").innerText = description
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
    // console.log("Building: " + stop)
    // $('area').bind('mouseover', function () {
    //     $('#bus_stops_overlay').mapster('tooltip');
    // });
    
    // $('#bus_stops_overlay').mapster(initial_opts)
    //     .mapster('set', true, stop, { // String goes here
    //         fill: true,
    //         fillColor: 'FF0000'
    //     })
    //     .mapster('snapshot')
    //     .mapster('rebind', basic_opts);

    // stop = stop.replace(/,/g, ",#")
    // console.log(stop);
    // $('#' + stop).bind('mouseover', function () { // ID goes here
    //     $('#bus_stops_overlay').mapster('tooltip', this, $(this).attr('full'));

    // });
    // if (bus != null) {
    //     bus = bus.replace(",", "\n");
    //     showDetailsTemp(stop, name, bus)
    // }
}


function selectParking(id,stop,key) {
    
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
    showDetailsTransit("test1","Student Parking","While there are lots of parking spaces available at the Burnaby Campus, you’ll want to make sure that you are aware of which spaces are student parking. Here’s some tips to make sure you have a good parking experience: \n   - Always make sure to read the parking signage to avoid getting a ticket \n   - Bring a credit card to pay for your parking or pre-purchase a parking pass online")
}

function selectLot(id,stop,key) {
    
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
    showDetailsTemp("test1","Student Parking","While there are lots of parking spaces available at the Burnaby Campus, you’ll want to make sure that you are aware of which spaces are student parking. Here’s some tips to make sure you have a good parking experience: \n   - Always make sure to read the parking signage to avoid getting a ticket \n   - Bring a credit card to pay for your parking or pre-purchase a parking pass online")
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

    stop = stop.replace(/,/g, ",#")
    $('#' + stop).bind('mouseover', function () { // ID goes here
        $('#'+id).mapster('tooltip', this, $(this).attr('full'));

    });
    showDetailsTemp("test1","Pay Parking","Pay stations are conveniently located near each of the campus parking lots. Pay stations accept credit cards only, so be sure to have a card on hand or <a href='https://verrus.com/Permits/default.aspx?r='>pre-purchase a parking permit</a> before arriving on campus. Alternatively, students can also <a href='https://www.paybyphone.com/'>pay through the paybyphone app</a>.")
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
    showDetailsTemp("","Timing","Although the Burnaby Campus may seem large on a map, it’s a lot faster to get from one end of campus to the other than you might think. Believe it or not, it takes only 10 minutes to walk from NE01 to SE16 or from Willingdon Avenue to Wayburne Drive. ")
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
    $('#bus_stops_overlay,#campus_entrances_overlay, #employee_parking_overlay, #first_aid_overlay, #handicap_overlay,#security_overlay,#student_parking_overlay,#visitor_parking_overlay,#food_services_overlay,#bike_overlay,#electrical_vehicle_overlay,#car_share_overlay, #bike_repair_overlay,#pay_station_overlay,#motorcycle_overlay,#timing_overlay').css("display","none")
    $('#'+id.value).css("display","block");

}