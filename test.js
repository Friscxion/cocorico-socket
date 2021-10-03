const Gpio = require('pigpio').Gpio;
const prompt = require('prompt-sync')({sigint: true});

const forward = new Gpio(14, {mode: Gpio.OUTPUT});
const back = new Gpio(15, {mode: Gpio.OUTPUT});

forward.pwmWrite(100);
back.pwmWrite(0);


while(true){
    if(prompt){
        forward.pwmWrite(0);
        back.pwmWrite(0);
    }
}
