const Gpio = require('pigpio').Gpio;
const button = new Gpio(21, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
});
let boucle=true;
button.on('interrupt', (level) => {
    console.log("interrupt")
    boucle=false;
});
const motor = new Gpio(14, {mode: Gpio.OUTPUT});
let pulseWidth = 1000;
let increment = 100;
let interval=setInterval(() => {
    motor.servoWrite(pulseWidth);
    pulseWidth += increment;
    if(!boucle)
        clearInterval(interval);
}, 100);

