function it(arr){
    var max = arr[0];
    var min = arr[0];
    var ave = 0;
    for (var i = 0; i<arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        ave += arr[i];
    }
    ave /= arr.length;
    return "The minimum is "+min+", the maximum is "+max+", and the average is "+ave+"."
}
var na = [2,-4,10,6,14]
console.log(it(na))