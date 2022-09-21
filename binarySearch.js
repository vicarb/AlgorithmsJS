function binarySearch(array, key){
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (array[middle] === key) {
            // found the key
            return middle;
        } else if (array[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return -1;
}

const arr = [1,4,6,7,8,9,10,69,99]

console.log(binarySearch(arr, 10))
