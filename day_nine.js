// n to 1 log
// function temp(n) {
//     if(n === 0) return
//     console.log(n)
//     temp(n-1)
// };

// temp(5);

// 1 to n
function temp(n) {
    if(n === 0) return
    temp(n-1)
    console.log(n)
};

temp(5);