// function bubbleSort(arr){
//     for(var i = 0; i <= arr.length; i++){
//         for(var j = 0; j < arr.length-1; j++){
//             if(arr[j] > arr[j+1]){
//                 var temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     console.log(arr);
//     return arr;
// }

function bubbleSort(arr){
    for(var i = 1; i <= arr.length; i++){
        var counter = 0;
        for(var j = 0; j < arr.length-i; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                counter++;
            }
        }
        if(counter == 0){
            break;
        }
    }
    console.log(arr);
    return arr;
}

var a = [9,2,3,4,1,5,6,8,7];
bubbleSort(a);