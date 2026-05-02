// let arr = [1,2,3,4,5,6,7,8,9,10];
// let copy = arr[0];

// for(let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
// }
// arr[arr.length-1] = copy;
// console.log(arr);


// let arr = [1,2,3,4,5,6,7,8,9,10];
// let copy = arr[arr.length - 1];

// for(let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
// }
// arr[0] = copy;
// console.log(arr);

// let arr = [1,2,3,4,5];
// let temp = new Array(arr.length);
// let n = 2;
// n = n % arr.length

// for (let i = 0; i < arr.length; i++) {
//     temp[i] = arr[(i + n) % arr.length];
// }

// console.log(temp);


// let arr = [1,2,3,4,5];
// let n = 2;
// n = n % arr.length

// reverse()
// reverse(0, n - 1);
// reverse(n, arr.length - 1);
// reverse(0, arr.length - 1);
// console.log(arr);

// function reverse(i, j) {
//     while(i < j) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//     }
// }


// function removeDuplicates(nums) {
//     let j = 1;
//     for(let i = 0; i < nums.length - 1; i++) {
//         if(nums[i] != nums[i + 1]) {
//             nums[j] = nums[i + 1];
//             j++;
//         }
//     }
//     return j;
// }

// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));


// function maxProfit(prices) {
//     let maxProfit = 0;
//     let min = prices[0];
//     for(let i = 0; i < prices.length; i++) {
//         if(prices[i] < min) min = prices[i];
//         let profit = prices[i] - min;
//         maxProfit = Math.max(maxProfit, profit);
//     }
//     return maxProfit;
// }

// console.log(maxProfit([7,1,5,3,6,4]));