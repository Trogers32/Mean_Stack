var tigger = {"character": "Tigger"}; // start with just the "character" attribute
var pooh = {"character": "Winnie the Pooh"};
var piglet = {"character": "Piglet"};
var heffalumps = {"character": "Heffalumps"};
var eeyore = {"character": "Eeyore"};
var kanga = {"character": "Kanga"};
var CR = {"character": "Christopher Robin"};
var owl = {"character": "Owl"};
var rabbit = {"character": "Rabbit"};
var gopher = {"character": "Gopher"};
var bees = {"character": "Bees"};
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
    "location": tigger
};

function move(dir) {
    if (dir === "north") {
        if (player.location.north) {
            player.location = player.location.north;
        } else {
            console.log("There's nothing there. Choose another direction.")
        }
    } else if (dir === "south") {
        if (player.location.south) {
            player.location = player.location.south;
        } else {
            console.log("There's nothing there. Choose another direction.")
        }
    } else if (dir === "east") {
        if (player.location.east) {
            player.location = player.location.east;
        } else {
            console.log("There's nothing there. Choose another direction.")
        }
    } else if (dir === "west") {
        if (player.location.west) {
            player.location = player.location.west;
        } else {
            console.log("There's nothing there. Choose another direction.")
        }
    }
}
move("north")
console.log(player.location.character)
move("north")
console.log(player.location.character)
move("north")
console.log(player.location.character)
move("north")
console.log(player.location.character)
move("north")
console.log(player.location.character)