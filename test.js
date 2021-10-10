

let in1 = 14;
let in2 = 15;

const led = new Gpio(14, {mode: Gpio.OUTPUT});

let dutyCycle = 0;

setInterval(() => {
    led.pwmWrite(dutyCycle);

    dutyCycle += 5;
    if (dutyCycle > 255) {
        dutyCycle = 0;
    }
}, 20);
