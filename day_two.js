// conditional statement

// let citizenAge = Number(prompt("Enter your age to check are you able to vote."));

let citizenAge = "19a"
citizenAge = Number(citizenAge);

if (isNaN(citizenAge)) return console.log("Something went wrong.");

if (citizenAge >= 18 && (typeof citizenAge) == 'number') console.log("Your are able to vote");
else console.log("Your are not able to vote");