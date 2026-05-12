// Book Allocation using Binary Search -> (MAANG LEVEL)

function allocateBooks(arr, m) {
    const n = arr.length;
    // if students > books
    if (m > n) return -1;
    let low = Math.max(...arr);
    let high = arr.reduce((sum, val) => sum + val, 0);
    let ans = high;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (isPossible(arr, m, mid)) {
            ans = mid;
            high = mid - 1; // try smaller answer
        } else {
            low = mid + 1; // increase limit
        }
    }
    return ans;
}

function isPossible(arr, m, maxPages) {
    let students = 1;
    let pages = 0;
    for (let i = 0; i < arr.length; i++) {
        // allocate current book to current student
        if (pages + arr[i] <= maxPages) {
            pages += arr[i];
        } else {
            // allocate to next student
            students++;
            pages = arr[i];
            if (students > m) {
                return false;
            }
        }
    }
    return true;
}

const arr = [12, 34, 67, 90];
const m = 2;
console.log(allocateBooks(arr, m));