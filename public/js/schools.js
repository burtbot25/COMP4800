var createBusinessButton = (businessBuildings, businessDescriptions) => {
    return `<button id="Business" onclick="selectSchool('${businessBuildings}', '${businessDescriptions}')">School of Business</button>`;
};

var createComputingButton = (computingBuildings, computingDescriptions) => {
    return `<button id="Computing" onclick="selectSchool('${computingBuildings}', '${computingDescriptions}')">School of Computing and Academic Studies</button>`;
};

var createConstructionButton = (constructionBuildings, constructionDescriptions) => {
    return `<button id="Construction" onclick="selectSchool('${constructionBuildings}', '${constructionDescriptions}')">School of Construction and the Environment</button>`;
};

var createEnergyButton = (energyBuildings, energyDescriptions) => {
    return `<button id="Energy" onclick="selectSchool('${energyBuildings}', '${energyDescriptions}')">School of Energy</button>`;
};

var createHealthButton = (healthBuildings, healthDescriptions) => {
    return `<button id="Health" onclick="selectSchool('${healthBuildings}', '${healthDescriptions}')">School of Health Sciences</button>`;
};

var createTransportationButton = (transportationBuildings, transportationDescriptions) => {
    return `<button id="Transportation" onclick="selectSchool('${transportationBuildings}', '${transportationDescriptions}')">School of Transportation</button>`;
};

var getData = async () => {
    // Server serves json data to this route
    let data = await fetch('/schoolsData');
    let json = await data.json();
    return json;
};

var populateMenu = async () => {
    let data = await getData();
    document.getElementById('loading').remove();
    let campusMap = document.getElementById('campus-map');
    campusMap.setAttribute('style', 'display: block');
    //everything up to here can stay the same, add .campus-map {display: none} to your css

    //let serviceGroups = data.serviceGroups[0]; //this will look different for everybody depending on how you serve your data.

    let nav = document.getElementById('sidenav');

    // If you need to create dopdowns, the way I did it was to have the dropdown options in a separate table in the database.
    // An entry in the table "serviceGroups" will correspond to a dropdown. An entry in the table "services" will correspond to a button that highlights or swaps overlays. 
    // Each entry in "services" will take contain id of the dropdown that it falls under as a foreign key. 

    //If you don't need to create dropdowns, then just loop through everything and modify createButton() as needed
    nav.insertAdjacentHTML('beforeend', createBusinessButton(data.businessBuildings, data.businessDescriptions));
    nav.insertAdjacentHTML('beforeend', createComputingButton(data.computingBuildings, data.computingDescriptions));
    nav.insertAdjacentHTML('beforeend', createConstructionButton(data.constructionBuildings, data.constructionDescriptions));
    nav.insertAdjacentHTML('beforeend', createEnergyButton(data.energyBuildings, data.energyDescriptions));
    nav.insertAdjacentHTML('beforeend', createHealthButton(data.healthBuildings, data.healthDescriptions));
    nav.insertAdjacentHTML('beforeend', createTransportationButton(data.transportationBuildings, data.transportationDescriptions));


    //Make sure to set height for html and body to 100% in css
    let html = document.querySelector('html');
    let body = document.querySelector('body'); 
    html.style.height = '';
    body.style.height = '';

    //let services = data.services[0]; //this will look different for everybody depending on how you serve your data.

    //You only need this section if you have dropdowns, if you did it the same way as I did with foreign keys, then "e.group" will be whatever your foreign key is called
//    services.forEach((e) => {
//        let el = document.getElementById(e.group);
//        el.insertAdjacentHTML('beforeend', createButton(e.buildingNumber, e.serviceName, e.description, e.link));
//    });

    let script = document.createElement('script');
    script.src = 'js/script.js';
    campusMap.append(script);
};

populateMenu();