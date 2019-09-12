function ex(str, arr=[]){
    str = str.split("");
    for(var ch of str){
        if(ch === "?"){
            var ind = str.indexOf(ch);
            str[ind] = 0;
            str = str.join('');
            arr = ex(str,arr);
            str = str.split("");
            str[ind] = 1;
            str = str.join('');
            arr = ex(str,arr);
            str = str.split("");
        }
    }
    str = str.join('');
    if(arr.includes(str)){
        return arr;
    }else{
        arr.push(str);
        console.log(str);
        //console.log(arr);
        return arr;
    }
}
var s = "1?0??";
ex(s);