
const Gpio = require('pigpio').Gpio;

let in1 = 14;
let in2 = 15;

const led = new Gpio(in1, {mode: Gpio.OUTPUT});

let dutyCycle = 0;

setInterval(() => {
    led.pwmWrite(dutyCycle);

    dutyCycle += 5;
    if (dutyCycle > 255) {
        dutyCycle = 0;
    }
}, 20);
