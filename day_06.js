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



// kadane's algo
// function maxSubarraySum(arr) {
//     let maxSum = 0;
//     let currentSum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         currentSum += arr[i];
//         maxSum = Math.max(maxSum, currentSum);
//         if(currentSum < 0) {
//             currentSum = 0;
//         }
//     }
//     return maxSum;
// }

// console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]));


// Moore's Voting Algorithm
// function majorityElement(nums) {
//     let count = 0;
//     let candidate = null;
//     for(let i = 0; i < nums.length; i++) {
//         if(count == 0) {
//             candidate = nums[i];
//         }
//         if(nums[i] == candidate) {
//             count++;
//         } else {
//             count--;
//         }
//     }
//     return candidate;
// }

// console.log(majorityElement([2,2,1,1,1,2,2]));


// Trapping rain water algo
// function trap(height) {
//     let leftMax = 0;
//     let rightMax = 0;
//     let water = 0;
//     for(let i = 0; i < height.length; i++) {
//         leftMax = Math.max(leftMax, height[i]);
//         rightMax = Math.max(rightMax, height[height.length - 1 - i]);
//         water += Math.min(leftMax, rightMax) - height[i];
//     }
//     return water;
// }

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));