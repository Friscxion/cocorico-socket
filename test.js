
const Gpio = require('pigpio').Gpio;

let in1 = 14;
let in2 = 15;

const led = new Gpio(in1, {mode: Gpio.OUTPUT});

let dutyCycle = 0;
led.pwmWrite(1000);
setInterval(() => {

}, 20);
