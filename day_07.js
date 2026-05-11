// loop of string each character
// let str = "Hello";
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }


// reverse loop of string each character
// let str = "Hello";
// for (let i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
// }


// reverse string
// let str = "Hello";
// let revStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
// }
// console.log(revStr);


// is pallindrome
// v1
// let str = "malayalam";
// let revStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
// }
// if (str == revStr) {
//     console.log("Pallindrome");
// } else {
//     console.log("Not Pallindrome");
// }

// v2
// let str = "madam";
// let ispallindrome = true;
// let i = 0, j = str.length - 1;

// while(i < j) {
//     if (str[i] != str[j]) {
//         ispallindrome = false;
//         break;
//     }
//     i++;
//     j--;
// }
// if (ispallindrome) {
//     console.log("Pallindrome");
// } else {
//     console.log("Not Pallindrome");
// }


// Toggle character by ASCII
// v1
// let str = "HeLlO";
// console.log(str);
// let toggle = "";

// for (let i = 0; i < str.length; i++) {
//     let ascii = str.charCodeAt(i);

//     if (ascii >= 65 && ascii <= 90) {
//         toggle += String.fromCharCode(ascii + 32);
//     } else if (ascii >= 97 && ascii <= 122) {
//         toggle += String.fromCharCode(ascii - 32);
//     }
// }
// console.log(toggle);


// v2
// let str = "HeLlO";
// console.log(str);
// let toggle = "";

// for (let i = 0; i < str.length; i++) {
//     let ascii = str.charCodeAt(i);
//     if (ascii >= 65 && ascii <= 90) {
//         toggle += str[i].toLowerCase();
//     } else if (ascii >= 97 && ascii <= 122) {
//         toggle += str[i].toUpperCase();
//     }
// }
// console.log(toggle);


// frequency of character
let str = "Hello";
let arr = new Array(128).fill(0);

for (let i = 0; i < str.length; i++) {
    let index = str.charCodeAt(i);
    arr[index]++;
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        console.log(String.fromCharCode(i) + " : " + arr[i]);
    }
}