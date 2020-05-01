function transit() {
    console.log("basic")
    var stops = document.createElement("img");
    stops.setAttribute("src", "/media/overlays/bus_stops_overlay.png");
    $("#map").append(stops);
}