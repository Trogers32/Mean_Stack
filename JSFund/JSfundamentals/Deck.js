
class Card{
    constructor(suit, val){
        this.suit = suit;
        this.val = val;
        var num = {
            "Ace": 1,
            "Two": 2,
            "Three": 3,
            "Four": 4,
            "Five": 5,
            "Six": 6,
            "Seven": 7,
            "Eight": 8,
            "Nine": 9,
            "Ten": 10,
            "Jack": 11,
            "Queen": 12,
            "King": 13
        };
        this.face = num[val];
    }
    showCard() {
        console.log(`${this.val} of ${this.suit}`);
    }
}

class Deck{
    constructor(){
        this.set = [];
        var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
        var vals = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
        for (var i = 0; i < suits.length; i++){
            for (var j = 0; j < vals.length; j++){
                this.set.push(new Card(suits[i],vals[j]))
            }
        }
        this.res = this.set;
    }
    shuffle(arr){
        var idx = arr.length;
        var temp;
        var rand;
        while(0 !== idx){
            rand = Math.floor(Math.random() * idx);
            idx--;
            temp = arr[idx];
            arr[idx] = arr[rand];
            arr[rand] = temp;
        }
        return arr;
    }
    reset(){
        this.set = this.res;
    }
    deal(){
        var t = Math.floor(Math.random() * this.set.length)
        var car = this.set[t];
        this.set.splice(t,1);
        return car;
    }
}

class Player extends Deck{
    constructor(name){
        super();
        this.name = name;
        this.hand = [];
        for(var i = 0; i < 5; i++){
            var ca = this.deal();
            this.hand.push(ca);
        }
    }
    discard(num){
        this.hand.splice(num, 1);
    }
    showHand(){
        for(var i = 0; i < this.hand.length; i ++){
            this.hand[i].showCard();
        }
    }
}

var d1 = new Deck();
var p1 = new Player("Tim");
p1.showHand();