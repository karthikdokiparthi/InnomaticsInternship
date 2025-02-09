function calculateFinalAmount(orderAmount) {
    if (orderAmount > 1000) {
        let discount = (orderAmount * 20) / 100;
        let finalPrice = orderAmount - discount;
        console.log('Total Price after 20% discount $', finalPrice);

    }
    else if (orderAmount > 500) {
        let discount = (orderAmount * 10) / 100;
        let finalPrice = orderAmount - discount;
        console.log('Total Price after 10% discount $', finalPrice);

    }
    else if (orderAmount > 50) {
        console.log('Total Price $', orderAmount);
    }
    else {
        let finalPrice = orderAmount + 10;
        console.log(orderAmount, '+ $10 shipping charges ')
        console.log('Total Price $', finalPrice);
    }
}

calculateFinalAmount(1150);