var motorBike = {

    // Only change code below this line.
    "wheels": 2,
    "engines": 1,
    "seats": 2
};

var MotorBike = function() {
    this.wheels = 2;
    this.engines = 1;
    this.seats = 2;
};

var Car = function() {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
};

var myCar = new Car();
myCar.nickname = "Volvo";
