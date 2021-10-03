const Gpio = require('pigpio').Gpio;

const led = new Gpio(14, {mode: Gpio.OUTPUT});

let dutyCycle = 0;

setInterval(() => {
    led.pwmWrite(100);

}, 20);
