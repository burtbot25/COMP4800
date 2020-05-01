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
/* end group selection functions */

function selectKeyPlaces(building) {
    console.log("Building: " + building)
    $('area').bind('mouseover', function () {
        $('#food_services_overlay').mapster('tooltip');
    });
    
    $('#food_services_overlay').mapster(initial_opts)
        .mapster('set', true, building, { // String goes here
            fill: true,
            fillColor: 'FF0000'
        })
        .mapster('snapshot')
        .mapster('rebind', basic_opts);

    building.replace(",", ",#")

    $('#' + building).bind('mouseover', function () { // ID goes here
        $('#food_services_overlay').mapster('tooltip', this, $(this).attr('full'));

    });
}

function selectTransit(stop) {
    console.log("Building: " + stop)
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

    stop.replace(",", ",#")

    $('#' + stop).bind('mouseover', function () { // ID goes here
        $('#bus_stops_overlay').mapster('tooltip', this, $(this).attr('full'));

    });
}


function selectParking(id,stop) {
    console.log("Building: " + stop)
    $('area').bind('mouseover', function () {
        $('#'+id).mapster('tooltip');
    });
    /*
    $('#'+id).mapster(initial_opts)
        .mapster('set', true, stop, { // String goes here
            fill: true,
            fillColor: 'FF0000'
        })
        .mapster('snapshot')
        .mapster('rebind', basic_opts);

    stop.replace(",", ",#")

    $('#' + stop).bind('mouseover', function () { // ID goes here
        $('#'+id).mapster('tooltip', this, $(this).attr('full'));

    });*/
}

function toggleDisplay(id){
    //$('area').css("display","none")
    $('#bus_stops_overlay,#campus_entrances_overlay, #employee_parking_overlay, #first_aid_overlay, #handicap_overlay,#security_overlay,#student_parking_overlay,#visitor_parking_overlay,#food_services_overlay').css("display","none")
    $('#'+id).css("display","block");

}