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

    let nav = document.getElementById('sidenav');

    nav.insertAdjacentHTML('beforeend', createBusinessButton(data.businessBuildings, data.businessDescriptions));
    nav.insertAdjacentHTML('beforeend', createComputingButton(data.computingBuildings, data.computingDescriptions));
    nav.insertAdjacentHTML('beforeend', createConstructionButton(data.constructionBuildings, data.constructionDescriptions));
    nav.insertAdjacentHTML('beforeend', createEnergyButton(data.energyBuildings, data.energyDescriptions));
    nav.insertAdjacentHTML('beforeend', createHealthButton(data.healthBuildings, data.healthDescriptions));
    nav.insertAdjacentHTML('beforeend', createTransportationButton(data.transportationBuildings, data.transportationDescriptions));

    let html = document.querySelector('html');
    let body = document.querySelector('body'); 
    html.style.height = '';
    body.style.height = '';

    let script = document.createElement('script');
    script.src = 'js/script.js';
    campusMap.append(script);
};

populateMenu();