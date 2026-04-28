// let n = Number(prompt("Enter the number"));

// let n = 10;

// if(isNaN(n)) {
//     console.log("Something went wrong");
//     return;
// } else {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }


// let n = Number(prompt("Enter the number"));

// let n = 10;

// if(isNaN(n)) {
//     console.log("Something went wrong");
//     return;
// } else {
//     if( n > 0) {
//         let factorial = 1;
//         for (let i = 1; i <= n; i++) {
//             factorial *= i;
//         }
//         console.log(factorial);
//     } else {
//         console.log("Please enter a positive number");
//     }
// }


// let n = Number(prompt("Enter the number"));

// let n = 10;

// if(isNaN(n)) {
//     console.log("Something went wrong");
//     return;
// } else {
//     for (let i = 1; i <= Math.floor(n/2); i++) {
//         if(n % i == 0) {
//             console.log(i);
//         }
//     }
//     console.log(n);
// }


// let num = 1234;
// let sum = 0;

// while (num > 0) {
//     let digit = num % 10;
//     sum += digit; 
//     num = Math.floor(num / 10);
// }

// console.log(sum);


// let num = 1234;
// let reversed = 0;

// while (num > 0) {
//     let digit = num % 10;
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10);
// }

// console.log(reversed);


// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let guess = Number(prompt("Enter the number"));

// while (guess != secretNumber) {
//     if (guess > secretNumber) {
//         console.log("Too high");
//     } else {
//         console.log("Too low");
//     }
//     guess = Number(prompt("Enter the number"));
// }
// console.log("You guessed the number");