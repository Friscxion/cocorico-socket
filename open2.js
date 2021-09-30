const gpio = require('rpi-gpio');
const gpiop = gpio.promise;

const motor1A = 14; // Green wire
const motor1B = 15; // Green wire

// Setting up the pins
gpiop.setup(motor1A, gpio.DIR_OUT);
gpiop.setup(motor1B, gpio.DIR_OUT);

gpiop.write(motor1A, true); // 1 & 0 => Clockwise
gpiop.write(motor1B, false);
