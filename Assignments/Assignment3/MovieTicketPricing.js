function calculateTicketPrice(age, showTime) {
    let standardPrice = 12;
    //Time Base Discount
    if (showTime < 17) {
        let discount = (standardPrice * 20) / 100;
        standardPrice = standardPrice - discount;
    }

    //Age Base Discount
    if (age > 60) {
        let discount = (standardPrice * 30) / 100;
        standardPrice = standardPrice - discount;
    } else if (age < 12) {
        let discount = (standardPrice * 40) / 100;
        standardPrice = standardPrice - discount;
    }
    return standardPrice;

}

let age = 11;
let showTime = 17;
let ticketPrice = calculateTicketPrice(age, showTime);
console.log('Your Ticket Price:', ticketPrice);