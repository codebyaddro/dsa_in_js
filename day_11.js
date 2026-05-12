// Binary Search
let arr = [10, 20, 40, 38, 21, 44, 20, 12, 54, 66];

arr.sort((a, b) => a - b);

let index = binarySearch(arr, 0, arr.length - 1, 38);

if(index == -1) console.log("Not Found");
else console.log(index);
console.log(arr);

function binarySearch(arr, first, last, target) {
    while(first <= last) {
        let mid = Math.floor((first + last) / 2);
        if(arr[mid] == target) return mid;
        else if(arr[mid] > target) last = mid - 1;
        else first = mid + 1;
    }
    return -1;
}