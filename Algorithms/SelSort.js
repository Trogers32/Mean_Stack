function selSort(arr){
    for(var i = 0; i < arr.length-1; i++){
        var currMin = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[currMin] > arr[j]){
                currMin = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[currMin];
        arr[currMin] = temp;
    }
    return arr;
}

function insSort(arr){
    for(var i = 0; i < arr.length; i++){
        var temp = arr[i];
        var j = i-1;
        while(j >= 0 && arr[j] > temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}

var a = [4,2,8,1,9,3];
var b = [4,2,8,1,9,3];
console.log(selSort(a))
console.log(insSort(b))