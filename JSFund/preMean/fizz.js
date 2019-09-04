function fizzbuzz(n){
    for(var i = 0; i<=n; i++){
        if(n<=0){
            return "n must be greater than 0."
        }
        else if(i%3 == 0 && i%5 == 0){
            console.log("FizzBuzz");
        }
        else if(i%3 == 0 && i%5 != 0){
            console.log("Fizz");
        }
        else if(i%3 != 0 && i%5 == 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}
fizzbuzz(21);