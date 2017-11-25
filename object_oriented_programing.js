//Define Javascript object as a variable
var motorBike = {
    "wheels": 2,
    "engines": 1,
    "seats": 2
};
//Create a Construction. Constructions make objects and must start with a capital letter. 
var MotorBike = function() {
    this.wheels = 2;
    this.engines = 1;
    this.seats = 2;
};
//Create instances of an object. Makes a New copy of an object, can add properties. 
var Car = function() {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
};
var myCar = new Car(); //must use "new" to create a new instance/object
myCar.nickname = "Volvo"; //adding a property to an object.

//Create unique objects with parameters.
var Car = function(wheels, seats, engines) {
    this.wheels = wheels;
    this.seats = seats;
    this.engines = engines;
};

var myCar = new Car(4, 2, 1); //4, 2, 1 are values entered into the object keys.

var Car = function() {
    // this is a private variable
    var speed = 10;

    // these are public methods
    this.accelerate = function(change) {
        speed += change;
    };

    this.decelerate = function() {
        speed -= 5;
    };

    this.getSpeed = function() {
        return speed;
    };
};

var Bike = function() {
    var gear = 10;

    this.getGear = function() {
        return gear;
    };

    this.setGear = function(x) {
        gear = x;
    };
};

var myCar = new Car();

var myBike = new Bike(4);

//use .map to interate over arrays. Allows you to create a new array 
//w/adjusted values w/out changing original array.
var oldArray = [1, 2, 3, 4, 5];
var newArray = oldArray.map(function(val) {
    return val + 3;
});

console.log(newArray);

//Reduce an array to one value.
var array = [4, 5, 6, 7, 8];
var singleVal = 0;

var singleVal = array.reduce(function(previousVal, currentVal) {
    return previousVal + currentVal;
}, 0);

//Filter an array. Iterate through the array and keep only values that are
//true of the function.
var oldArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArray = oldArray.filter(function(val) {
    return val < 6;
});

//Sort array largest to smallest (b-a), or smallest to largest (a-b).
//If no call back, array is converted to strings and sorted alphabetically.
var array = [1, 12, 21, 2];
array.sort(function(a, b) {
    return b - a;
});

//Reverse an array. Destructive action
var array = [1, 2, 3, 4, 5, 6, 7];
var newArray = [];
newArray = array.reverse();

//Concat() combines arrays by add one onto the end of the other.
var oldArray = [1, 2, 3];
var newArray = [];

var concatMe = [4, 5, 6];
newArray = oldArray.concat(concatMe);


//Split() a string into an array
var string = "Split me into an array";
var array = [];
array = string.split(" ");
//(" ") this splits the string at each space.

//Join() arrays 
var joinMe = ["Split", "me", "into", "an", "array"];
var joinedString = '';
joinedString = joinMe.join(" ");
//.join(" ") joins array leaving a space in between each item.
