function mergeSort (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    return merge(
        mergeSort(left), mergeSort(right)
    );
}
function merge (arr1, arr2) {
    var newArr = []
    var left = 0
    var right = 0;
    while (left < arr1.length && right < arr2.length) {
        if (arr1[left] < arr2[right]) {
            newArr.push(arr1[left]);
            left++;
        } else {
            newArr.push(arr2[right]);
            right++;
        }
    }
    return newArr.concat(arr1.slice(left)).concat(arr2.slice(right));
}
var a = [5,9,2,4,0,1,7,6]
var b = [9,8,7,6,5,4,3,2,1,0]
var c = [1,4,3,5]
console.log(mergeSort(a))
console.log(mergeSort(b))
console.log(mergeSort(c))