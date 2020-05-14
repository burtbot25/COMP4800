var createDropdown = (name, id) => {
    return `
    <button class="dropdown-btn"> ${name} <i class="fa fa-caret-down"></i> </button> 
    <div id=${id} class="dropdown-container"> </div>`;
};

var createFoodButton = (building, service_name, description, foodLink, foodPlaceNames) => {
    return `<button onclick="selectFoods('${building}', '${service_name}', '${description}', '${foodLink}', '${foodPlaceNames}')"> ${service_name} </button>`;
};

var createMicrowavesButton = (building, names) => {
    return `<button onclick="selectMicrowaves('${building}', '${names}')"> Microwaves </button>`;
};

var createOtherKeyPlacesButton = (buildings, names, buttonName, description, link) => {
    return `<button onclick="selectKeyPlaces('${buildings}', '${names}', '${buttonName}', '${description}', '${link}')"> ${buttonName} </button>`;
};

var getData = async () => {
    // Server serves json data to this route
    let data = await fetch('/foodData');
    let json = await data.json();
    return json;
};

var populateMenu = async () => {
    let data = await getData();
    document.getElementById('loading').remove();
    let campusMap = document.getElementById('campus-map');
    campusMap.setAttribute('style', 'display: block');
    //everything up to here can stay the same, add .campus-map {display: none} to your css

    let nav = document.getElementById('sidenav');

    // If you need to create dopdowns, the way I did it was to have the dropdown options in a separate table in the database.
    // An entry in the table "serviceGroups" will correspond to a dropdown. An entry in the table "services" will correspond to a button that highlights or swaps overlays. 
    // Each entry in "services" will take contain id of the dropdown that it falls under as a foreign key. 

    //If you don't need to create dropdowns, then just loop through everything and modify createButton() as needed
    
    nav.insertAdjacentHTML('beforeend', createFoodButton(data.foodLocations, "Food &amp; Coffee", data.foodDescription, data.foodLink, data.foodPlaceNames));
    // nav.insertAdjacentHTML('beforeend', createMicrowavesButton(data.microwavesLocations,));
    nav.insertAdjacentHTML('beforeend', createOtherKeyPlacesButton(data.microwavesLocations,  data.microwavesNames, "Microwaves", null, null));
    nav.insertAdjacentHTML('beforeend', createOtherKeyPlacesButton(data.socialBuildings, data.socialNames, "Social", null, null));
    nav.insertAdjacentHTML('beforeend', 
        createOtherKeyPlacesButton(
            data.studyBuildings, data.studyNames, 
            "Bookable Study Areas", data.studyAreaDescription, data.studyAreaHyperlink)
        )
    ;

    //Make sure to set height for html and body to 100% in css
    let html = document.querySelector('html');
    let body = document.querySelector('body'); 
    html.style.height = '';
    body.style.height = '';

    // let services = data.services[0]; //this will look different for everybody depending on how you serve your data.

    let script = document.createElement('script');
    script.src = 'js/script.js';
    campusMap.append(script);
};

populateMenu();
