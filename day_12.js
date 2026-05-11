function conquor(arr, f, m, l) {
    let temp = new Array(l - f + 1);

    let i = f, j = m + 1, k = 0;

    while(i <= m && j <= l) {
        if(arr[i] < arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }

    while(i <= m) {
        temp[k++] = arr[i++];
    }

    while(j <= l) {
        temp[k++] = arr[j++];
    }

    let p = 0, t = f;

    while(p < temp.length) {
        arr[t++] = temp[p++];
    }
}

function divide(arr, f, l) {
    if(f >= l) return;

    let mid = Math.floor((f + l) / 2);

    divide(arr, f, mid);
    divide(arr, mid + 1, l);

    conquor(arr, f, mid, l);
}

let arr = [8, 2, 1, 9, 5, 12, 4, 20];

divide(arr, 0, arr.length - 1);

console.log(arr);