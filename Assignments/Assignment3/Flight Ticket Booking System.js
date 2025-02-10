function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300;
    let classCharge = 0;
    let extraLuggageCharge = 0;
    let discount = 0;

    if (classType === "Business") {
        classCharge = 200;
    } else if (classType === "First") {
        classCharge = 500;
    }

    if (luggageWeight > 20) {
        extraLuggageCharge = Math.ceil((luggageWeight - 20) / 10) * 50;
    }

    let totalFare = baseFare + classCharge + extraLuggageCharge;

    if (isStudent) {
        discount = totalFare * 0.15;
    } else if (isSenior) {
        discount = totalFare * 0.10;
    }

    totalFare -= discount;
    return totalFare.toFixed(2);
}

console.log(calculateFlightFare("Economy", 15, true, false));
console.log(calculateFlightFare("Business", 25, false, true));
console.log(calculateFlightFare("First", 35, false, false));
console.log(calculateFlightFare("Economy", 22, false, false)); 
