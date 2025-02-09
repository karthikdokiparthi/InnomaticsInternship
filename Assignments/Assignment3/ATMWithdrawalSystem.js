function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin != pin) {
        console.log('Incorrect Pin');
    }
    else if (amount > balance) {
        console.log('Insufficient Funds');
    }
    else if (amount % 100 != 0) {
        console.log('Enter amount in multiples of 100');
    } else {
        balance -= amount;
        console.log('Withdrawal successful: ', amount, '. New balance: ', balance);
    }
}
let currentBalance = 15000;
let withdrawalAmount = 10000;
let atmPin = 1234;
let userEnteredPin = 1234;

atmWithdrawal(currentBalance, withdrawalAmount, atmPin, userEnteredPin);
