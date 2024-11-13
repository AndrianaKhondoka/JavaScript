let swap = (arr, index1, index2) => {let place = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = place;

    return arr;
};
console.log(swap([51, 2, 17, 88, 24], 0, 1));