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

    let nav = document.getElementById('sidenav');
    
    nav.insertAdjacentHTML('beforeend', createFoodButton(data.foodLocations, "Food &amp; Coffee", data.foodDescription, data.foodLink, data.foodPlaceNames));
    nav.insertAdjacentHTML('beforeend', createOtherKeyPlacesButton(data.microwavesLocations,  data.microwavesNames, "Microwaves", null, null));
    nav.insertAdjacentHTML('beforeend', createOtherKeyPlacesButton(data.socialBuildings, data.socialNames, "Social", null, null));
    nav.insertAdjacentHTML('beforeend', 
        createOtherKeyPlacesButton(
            data.studyBuildings, data.studyNames, 
            "Bookable Study Areas", data.studyAreaDescription, data.studyAreaHyperlink)
        )
    ;

    let html = document.querySelector('html');
    let body = document.querySelector('body'); 
    html.style.height = '';
    body.style.height = '';

    let script = document.createElement('script');
    script.src = 'js/script.js';
    campusMap.append(script);
};

populateMenu();
