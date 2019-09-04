function Ninja(name) {
    var self = this;
    var speed = 10; // private var
    var strength= 10; // private var
    this.name = name; 
    this.health = 100; 
    this.sayName = function() {
      console.log(`I am ${this.name}`);
    };
    this.showStats = function() {
        console.log(this)
        console.log(`Check out my stats: Name is ${this.name}, strength is ${strength}, speed is ${speed}, and my health is ${this.health}`);
    };
    this.drinkSake = function() {
        this.health += 10;
        console.log(`My health has increased by 10 and is now: ${this.health}`);
    };
    this.punch = function(nin) {
        if(nin instanceof Ninja){
            nin.health -= 5;
            console.log(`You punched ${nin.name} and they took 5 damage!`);
        }
        else {
            console.log("That's not a ninja!")
        }
    };
    this.kick = function(nin) {
        if(nin instanceof Ninja){
            nin.health -= 15 * strength;
            console.log(`You kicked ${nin.name} and they took ${15 * strength} damage!`);
        }
        else {
            console.log("That's not a ninja!")
        }
    };
    return this;
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