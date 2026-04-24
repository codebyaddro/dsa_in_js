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

let amount = "10000";
amount = Number(amount);
let discount = 0;

if (amount > 0 && amount <= 5000) {
    discount = 0;
} else if (amount > 5001 && amount <= 7000) {
    discount = 0.05
} else if (amount > 7001 && amount <= 9000) {
    discount = 0.1
} else if (amount > 9000) {
    discount = 0.2
}

let payable = Math.floor(amount - (amount * discount))
console.log(`You need to pay $${payable}`);