// n to 1 log
// function temp(n) {
//     if(n === 0) return
//     console.log(n)
//     temp(n-1)
// };
// temp(5);

// 1 to n log
// function temp(n) {
//     if(n === 0) return
//     temp(n-1)
//     console.log(n)
// };
// temp(5);

// sum of n
// function sum(n) {
//     if (n == 1) return n
//     return n + sum(n - 1)
// }
// console.log(sum(5));

// factorial of n
function fact(n) {
    if (n == 1) return n
    return n * fact(n - 1)
}
console.log(fact(5));