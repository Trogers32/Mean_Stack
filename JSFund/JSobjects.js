let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function ch1(arr){
    for(obj of arr){
        console.log("Name:", obj.name, "Cohort:", obj.cohort);
    }
}

ch1(students);


let users = {
    'employees': [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    'managers': [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function ch2(arr){
    console.log("EMPLOYEES")
    for(var i = 0; i<arr['employees'].length; i++){
        ln = arr['employees'][i].last_name.length + arr['employees'][i].first_name.length;
        console.log((i+1), "-", arr['employees'][i].last_name + ",", arr['employees'][i].first_name, "-", ln);
    }
    console.log("MANAGERS")
    for(var i = 0; i<arr['managers'].length; i++){
        ln = arr['managers'][i].last_name.length + arr['managers'][i].first_name.length;
        console.log((i+1), "-", arr['managers'][i].last_name + ",", arr['managers'][i].first_name, "-", ln);
    }
}
ch2(users)

function decode(str){
    var newstr = '';
    for(var i = 0; i<str.length; i++){
        var count = parseInt(str[i+1]);
        if(count){
            for(var j = 0; j<count;j++){
                newstr += str[i];
            }
            i++;
        }
        else {
            newstr += str[i];
        }
    }
    return newstr;
}

var s1 = 'h3k2llt6xy'
console.log(decode(s1))