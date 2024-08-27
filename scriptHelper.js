// Write your helper functions here!

require('cross-fetch/polyfill');

// Here is the HTML formatting for our mission target div.
/*
             <h2>Mission Destination</h2>
             <ol>
                 <li>Name: </li>
                 <li>Diameter: </li>
                 <li>Star: ${star}</li>
                 <li>Distance from Earth: </li>
                 <li>Number of Moons: </li>
             </ol>
             <img src="">
*/
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTargetDiv = document.getElementById("missionTarget");
    missionTargetDiv.innerHTML = "";

    const header = document.createElement("h2");
    header.innerHTML = "Mission Destination";
    missionTargetDiv.appendChild(header);

    const newList = document.createElement("ol");
    missionTargetDiv.appendChild(newList);

    const nameItem = document.createElement("li");
    nameItem.innerHTML = `Name: ${name}`;
    newList.appendChild(nameItem);

    const diameterItem = document.createElement("li");
    diameterItem.innerHTML = `Diameter: ${diameter}`;
    newList.appendChild(diameterItem);

    const starItem = document.createElement("li");
    starItem.innerHTML = `Star: ${star}`;
    newList.appendChild(starItem);

    const distanceItem = document.createElement("li");
    distanceItem.innerHTML = `Distance from Earth: ${distance}`;
    newList.appendChild(distanceItem);

    const moonsItem = document.createElement("li");
    moonsItem.innerHTML = `Number of Moons: ${moons}`;
    newList.appendChild(moonsItem);

    const image = document.createElement("img");
    image.src = imageUrl;
    missionTargetDiv.appendChild(image);
}
 
function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
      } 
      else if (isNaN(Number(testInput))) { 
           return "Not a Number";
      } 
      else { (!isNaN(Number(testInput)))
           return "Is a Number";
      }
}

 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let launchStatus = document.getElementById('launchStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    let faultyItems = document.getElementById('faultyItems');

    pilotStatus.innerHTML = "";
    copilotStatus.innerHTML = "";
    fuelStatus.innerHTML = "";
    cargoStatus.innerHTML = "";
    launchStatus.innerHTML = "";
    faultyItems.style.visibility = "hidden"; 

    const pilotValidation = validateInput(pilot);
    const copilotValidation = validateInput(copilot);
    const fuelValidation = validateInput(fuelLevel);
    const cargoValidation = validateInput(cargoLevel);

    if (pilotValidation === "Empty" || copilotValidation === "Empty" || 
        fuelValidation === "Empty" || cargoValidation === "Empty") {
        alert("All fields are required!");
        return;
    }

    if (pilotValidation === "Is a Number" || copilotValidation === "Is a Number") {
        alert("Please do not enter numbers for the name of the pilot or co-pilot.");
        return;
    }

    if (fuelValidation === "Not a Number" || cargoValidation === "Not a Number") {
        alert("Please enter numerical values for Fuel Level and Cargo Mass.");
        return;
    }

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    const fuelLevelNum = Number(fuelLevel);
    const cargoLevelNum = Number(cargoLevel);

    if (fuelLevelNum < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }

    if (cargoLevelNum > 10000) {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    if (fuelLevelNum < 10000 || cargoLevelNum > 10000) {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        list.style.visibility = "visible"; 
    } else {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
        list.style.visibility = "hidden"; 
    }
    list.style.visibility = "visible"; 

}

        
        

 
 async function myFetch() {
    const response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    const planetsReturned = await response.json();
    return planetsReturned;
}

function pickPlanet(planets) {
    const randomPlanet = Math.floor(Math.random() * planets.length);
    return planets[randomPlanet];
}

 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;