// Search insert position using Binary Search
const searchInsert = (nums, target) => {
    let first = 0,
        last = nums.length - 1;
    while (first <= last) {
        let mid = Math.floor((first + last) / 2);
        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) first = mid + 1;
        else last = mid - 1;
    }
    return first
};

let arr = [10, 40, 50, 60];
console.log(searchInsert(arr, 50))