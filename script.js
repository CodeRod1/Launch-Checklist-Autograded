
window.addEventListener("load", function() {
    myFetch().then(function(planets) {
        const planet = pickPlanet(planets);

        addDestinationInfo(
            document,
            planet.name,
            planet.diameter,
            planet.star,
            planet.distance,
            planet.moons,
            planet.image
        );
    }).catch(function(error) {
        console.error("Error fetching planets:", error);
    });

    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const list = document.getElementById("faultyItems");
        const pilot = document.querySelector("input[name=pilotName]").value;
        const copilot = document.querySelector("input[name=copilotName]").value;
        const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        const cargoMass = document.querySelector("input[name=cargoMass]").value;

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    });
});
