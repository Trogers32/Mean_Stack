class Ninja{
    constructor(name){
        this.speed = 3; 
        this.strength= 3; 
        this.name = name; 
        this.health = 100;
    } 
    sayName = function() {
      console.log(`I am ${this.name}`);
    };
    showStats = function() {
        console.log(`Check out my stats: Name is ${this.name}, strength is ${this.strength}, speed is ${this.speed}, and my health is ${this.health}`);
    };
    drinkSake = function() {
        this.health += 10;
        console.log(`My health has increased by 10 and is now: ${this.health}`);
    };
    punch = function(nin) {
        if(nin instanceof Ninja){
            nin.health -= 5;
            console.log(`You punched ${nin.name} and they took 5 damage!`);
        }
        else {
            console.log("That's not a ninja!")
        }
    };
    kick = function(nin) {
        if(nin instanceof Ninja){
            nin.health -= 15 * this.strength;
            console.log(`You kicked ${nin.name} and they took ${15 * this.strength} damage!`);
        }
        else {
            console.log("That's not a ninja!")
        }
    };
  }
class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.wisdom = 10;
    }
    speakWisdom = function() {
        this.drinkSake();
        console.log("The one who knows they know nothing is the wisest of them all.")
    }
}


  var ninja1 = new Ninja("Hyabusa");
  ninja1.sayName();
  ninja1.showStats();
  var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
redNinja.kick(blueNinja);
redNinja.kick("a");
redNinja.punch("x");
var sen = new Sensei("Corda");
sen.speakWisdom();
sen.showStats();