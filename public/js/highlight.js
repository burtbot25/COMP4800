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
        strokeColor: 'ffff00'
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

function selectSchool(school_name, building, description) {
    $('area').bind('mouseover', function () {
        $('#campus_entrances_overlay').mapster('tooltip');
    });
    $('#campus_entrances_overlay').mapster(initial_opts)
        .mapster('set', true, building, {
            fill: true,
            fillColor: 'ffea2e'
        })
        .mapster('snapshot')
        .mapster('rebind', basic_opts);
    
    building = building.replace(/,/g, ",#")
    $('#' + building).bind('mouseover', function () {
        $('#campus_entrances_overlay').mapster('tooltip', this, $(this).attr('full'));

    });
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
    document.getElementById("details_box").style.backgroundColor = "#ffea2e"
    document.getElementById("details_box").style.color = "#003c71"
}

function hideFoodDetails(){
    document.getElementById("details_box").style.display = "none"
}

function showDetails(building, service_name, description){
    document.getElementById("details_title").innerText = service_name
    document.getElementById("details_title").style.fontWeight = "bold"
    document.getElementById("details_info").innerText = "(currently blank)" + description
    document.getElementById("details_link").innerText = "(Link Here)"
    document.getElementById("details_box").style.backgroundColor = "#ffea2e"
    document.getElementById("details_box").style.color = "#003c71"
}

function showDetailsTemp(building, service_name, description){
    document.getElementById("details_title").innerText = service_name
    document.getElementById("details_title").style.fontWeight = "bold"
    document.getElementById("details_info").innerText = description
    document.getElementById("details_box").style.backgroundColor = "#ffea2e"
    document.getElementById("details_box").style.color = "#003c71"
}

function selectTransit(key, name, bus) {
    // console.log("Building: " + stop)
    // $('area').bind('mouseover', function () {
    //     $('#bus_stops_overlay').mapster('tooltip');
    // });
    console.log("test")
    $('#bus_stops_overlay').mapster({
        initial_opts,
        mapKey: 'data-key',
        strokeWidth:2,
        strokeColor: 'F88017',
        mapValue: 'full',
        showToolTip: true
        }
        )
        .mapster('set', true, key, { // String goes here
            fill: true,
            fillColor: 'FF0000'
        })
        // .mapster('snapshot')
        // .mapster('rebind', basic_opts);

    // stop.replace(",", ",#")
    console.log(key);
    // $('#' + key).bind('mouseover', function () { // ID goes here
    //     $('#bus_stops_overlay').mapster('tooltip', this, $(this).attr('full'));

    // });
    // if (bus != null) {
    //     bus = bus.replace(",", "\n");
    //     showDetailsTemp(stop, name, bus)
    // }
}

function selectNav(stop, name, bus) {
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
    if (bus != null) {
        bus = bus.replace(",", "\n");
        showDetailsTemp(stop, name, bus)
    }
}


function selectParking(id,stop) {
    console.log("Building: " + stop)
    $('area').bind('mouseover', function () {
        $('#'+id).mapster('tooltip');
    });
    
    $('#'+id).mapster(initial_opts)
        .mapster('set', true, stop, { // String goes here
            fill: true,
            fillColor: 'ffea2e',
            mapKey: 'parking-key',
        })
        .mapster('snapshot')
        .mapster('rebind', basic_opts);

    stop = stop.replace(/,/g, ",#")
    $('#' + stop).bind('mouseover', function () { // ID goes here
        $('#'+id).mapster('tooltip', this, $(this).attr('full'));

    });
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

function toggleDropdown(self) {
    console.log(self);  
    $(".dropdown-btn").not(self).next(".dropdown-container").css("display","none");
    $(".dropdown-btn").not(self).next(".dropdown-container").removeClass('active');
}
function toggleDisplay(id){
    console.log(id);
    //$('area').css("display","none")
    $('img').mapster('unbind');
    $('#bus_stops_overlay,#campus_entrances_overlay, #employee_parking_overlay, #first_aid_overlay, #handicap_overlay,#security_overlay,#student_parking_overlay,#visitor_parking_overlay,#food_services_overlay,#bike_overlay,#electrical_vehicle_overlay,#car_share_overlay, #bike_repair_overlay,#pay_station_overlay,#motorcycle_overlay').css("display","none")
    $('#'+id.value).css("display","block");

}