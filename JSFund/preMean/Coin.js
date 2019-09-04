function change(num){
    coins = {
        "dollars" : 0,
        "quarters" : 0,
        "dimes" : 0,
        "nickels" : 0,
        "pennies" : 0
    };
    coins["dollars"] = Math.floor(num/100);
    num -= coins["dollars"]*100
    coins["quarters"] = Math.floor(num/25);
    num -= coins["quarters"]*25
    coins["dimes"] = Math.floor(num/10);
    num -= coins["dimes"]*10
    coins["nickels"] = Math.floor(num/5);
    num -= coins["nickels"]*5
    coins["pennies"] = num;
    console.log(coins);
    return coins;
}

change(512);
change(12);
change(5212);
change(32);
