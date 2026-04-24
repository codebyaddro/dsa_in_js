// conditional statement

// Stage : 1
// let citizenAge = Number(prompt("Enter your age to check are you able to vote."));

// let citizenAge = "19a"
// citizenAge = Number(citizenAge);

// if (isNaN(citizenAge)) return console.log("Something went wrong.");

// if (citizenAge >= 18 && (typeof citizenAge) == 'number') console.log("Your are able to vote");
// else console.log("Your are not able to vote");


// Stage : 2
// let amount = Number(prompt("Enter the shopping amount to get discount."));

// let amount = "10000";
// amount = Number(amount);
// let discount = 0;

// if (amount > 0 && amount <= 5000) {
//     discount = 0;
// } else if (amount > 5000 && amount <= 7000) {
//     discount = 0.05
// } else if (amount > 7000 && amount <= 9000) {
//     discount = 0.1
// } else if (amount > 9000) {
//     discount = 0.2
// }

// let payable = Math.floor(amount - (amount * discount))
// console.log(`You need to pay $${payable}`);

// Stage : 3
// let units = Number(prompt("Enter total used units"));

// let unit = "100";
// unit = Number(unit);
// let bill = 0;

// if (unit > 400) {
//     bill = (unit - 400) * 13;
//     unit = 400;
// }
// if (unit > 200 && unit <= 400) {
//     bill += (unit - 200) * 8;
//     unit = 200;
// }
// if (unit > 100 && unit <= 200) {
//     bill += (unit - 100) * 6;
//     unit = 100;
// }

// bill += unit * 4.2;
// console.log(bill);