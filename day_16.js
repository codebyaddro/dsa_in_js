// Search in rotated sorted array
const search = (nums, target) => {
    let first = 0,last = nums.length - 1;
    while (first <= last) {
        let mid = Math.floor((first + last) / 2);
        if (nums[mid] == target) return mid;
        if (nums[first] <= nums[mid]) {
            if (target >= nums[first] && target < nums[mid]) last = mid - 1;
            else first = mid + 1;
        }
        else {
            if (target > nums[mid] && target <= nums[last]) first = mid + 1;
            else last = mid - 1;
        }
    }
    return -1;
};

let arr = [40, 50, 60, 10, 20, 30];
console.log(search(arr, 20));