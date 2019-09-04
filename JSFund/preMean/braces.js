function brace(st){
    var b = { 
        '(':')', 
        '{':'}', 
        '[':']' 
    };
    var count = 0;
    var arr = [];
    for(var i = 0; i < st.length; i++){
        c = st[i]
        if(b[c]){
            arr.push(c);
        }
        else if(b[arr.pop()] !== c){
            for(var val in b){
                if(b[val] == c){
                    return false; ///////////////////////////BROKEN
                }
            }
        }
    }
    return arr.length === 0;
}

var b = '()(a){}[][()]'
var c = ')[a]{}'
var d = '({[]})'
console.log(brace(b))
console.log(brace(c))
console.log(brace(d))
