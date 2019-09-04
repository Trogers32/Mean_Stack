var tigger = {
    "character": "Tigger",
    greet: function () {
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
    }
};
var pooh = {
    "character": "Winnie the Pooh",
    greet: function () {
        console.log("Oh bother.");
    }
};
var piglet = {
    "character": "Piglet",
    greet: function () {
        console.log("Oh d-d-d-d-dear!");
    }
};
var heffalumps = {
    "character": "Heffalumps",
    greet: function () {
        console.log("I'm heff.");
    }
};
var eeyore = {
    "character": "Eeyore",
    greet: function () {
        console.log("I'm depressed.");
    }
};
var kanga = {
    "character": "Kanga",
    greet: function () {
        console.log("I'm Kanga.");
    }
};
var CR = {
    "character": "Christopher Robin",
    greet: function () {
        console.log("I'm Chris.");
    }
};
var owl = {
    "character": "Owl",
    greet: function () {
        console.log("I'm Owl.");
    }
};
var rabbit = {
    "character": "Rabbit",
    greet: function () {
        console.log("I'm Rabbit.");
    }
};
var gopher = {
    "character": "Gopher",
    greet: function () {
        console.log("I'm Gopher.");
    }
};
var bees = {
    "character": "Bees",
    greet: function () {
        console.log("Holy hell! BEEEEEEEESSSSS!!!!!");
    }
};
tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
pooh.south = tigger;      // create Piglet's home object with just the "character" attribute
pooh.east = bees;
pooh.west = piglet;
pooh.north = CR;
piglet.east = pooh;
piglet.north = owl;
bees.west = pooh;
bees.north = rabbit;
owl.south = piglet;
owl.east = CR;
CR.north = kanga;
CR.east = rabbit;
CR.south = pooh;
CR.west = owl;
rabbit.west = CR;
rabbit.south = bees;
rabbit.east = gopher;
kanga.south = CR;
kanga.north = eeyore;
eeyore.south = kanga;
eeyore.east = heffalumps;
heffalumps.west = eeyore;

var player = {
    "location": tigger,
    "honey": false
};


function mission() {
    var map = [tigger, pooh, piglet, owl, CR, rabbit, kanga, eeyore, heffalumps];
    var loc = Math.floor(Math.random() * 10);
    player.miss = map[loc];
    console.log("Find some honey and deliver it to " + player.miss.character);
}
function pickUp(){
    if (player.location === bees) {
        player.honey = true;
        console.log("You picked up some honey.")
    } else {
        console.log("No honey found.");
    }
}
function drop(){
    if (player.location === player.miss && player.honey === true) {
        player.honey = false;
        console.log("You delivered the honey!");
        mission();
    } else if (player.location === player.miss || player.honey === false) {
        console.log("You don't have any honey.");
    } else {
        console.log("They didn't want the honey.");
    } 
}

function move(dir) {
    var x = 1;
    while (x != 0) {
        var dir = prompt("What direction would you like to go?")
        if (player.location[dir]) {
            if (player.location[dir]) {
                player.location = player.location[dir];
            } else {
                console.log("There's nothing there. Choose another direction.")
            }
        } else if (dir === "Pick up") {
            pickUp();
        } else if (dir === "deliver") {
            drop();
        } else {
            x = 0;
        }
        player.location.greet();
    }
}
mission();
move();