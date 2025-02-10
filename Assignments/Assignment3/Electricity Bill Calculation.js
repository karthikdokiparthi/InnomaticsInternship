function calculateElectricityBill(units, timeOfDay) {
    let rate;

    if (units <= 100) {
        rate = 5;
    } else if (units <= 300) {
        rate = 4;
    } else {
        rate = 3;
    }

    if (timeOfDay >= 20 || timeOfDay < 8) {
        rate *= 1.1;
    }

    let totalBill = units * rate;
    return totalBill;
}


console.log(calculateElectricityBill(50, 10));
console.log(calculateElectricityBill(150, 21));