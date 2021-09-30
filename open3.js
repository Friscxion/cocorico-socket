const module = require("motor-l298n")

let speed      = 100; // Percentage
let in1Pin     = 17;
let in2Pin     = 27;
let enable1Pin = 12;
let in3Pin     = 14;
let in4Pin     = 15;
let enable2Pin = 13;


let l298n = module.setup(in1Pin, in2Pin, enable1Pin, in3Pin, in4Pin, enable2Pin);

l298n.forward(l298n.LEFT);
l298n.forward(l298n.RIGHT);
l298n.setSpeed(l298n.LEFT,speed);
l298n.setSpeed(l298n.RIGHT,speed);
console.log("Moving forward!!");
