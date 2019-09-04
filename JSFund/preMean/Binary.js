function bsearch(arr, num){
    var idx = 0;
    var end = arr.length;
    while(end > idx){
        var mid = Math.floor((idx + end)/2);
        if(num > arr[mid]){
            idx = mid + 1;
        }
        else if(num <= idx){
            end = mid;
        }
        else{
            return true;
        }
    }
    return false;
}
var x = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

console.log(bsearch(x,12))