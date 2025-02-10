function trafficLightControl(density) {
    let formatedDensity = density.toLowerCase();
    if (formatedDensity === "heavy traffic") {
        return 'Greeen for 60 seconds';
    } else if (formatedDensity === "moderate traffic") {
        return 'Green for 40 seconds';
    } else if (formatedDensity === "light traffic") {
        return 'Green for 20 seconds';
    } else {
        return 'Invalid Input';
    }
}

let heavy = "Hight Traffic";
let morderate = "Moderate Traffic";
let light = "Light Traffic";
console.log(trafficLightControl(light));