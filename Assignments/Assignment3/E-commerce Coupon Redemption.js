function applyCoupon(orderAmount, couponCode) {
    let discount = 0;
    let shippingFee = 20;
    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        discount = (orderAmount * 10) / 100;
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        shippingFee = 0;
    } else {
        return "Invalid CouponCode";
    }
    let finalPrice = orderAmount - discount + shippingFee;
    return finalPrice;
}

let orderAmount = 1000;
let couponCode = "DISCOUNT10"
//let couponCode = 'FREESHIP';
console.log(applyCoupon(orderAmount, couponCode));