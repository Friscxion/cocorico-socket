const Gpio = require('pigpio').Gpio;

const forward = new Gpio(14, {mode: Gpio.OUTPUT});
const back = new Gpio(15, {mode: Gpio.OUTPUT});

forward.pwmWrite(100);
back.pwmWrite(0);
