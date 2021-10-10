
module.exports=()=>{
    const Gpio = require('pigpio').Gpio;
    let in1 = 14;
    const led = new Gpio(in1, {mode: Gpio.OUTPUT});
    led.pwmWrite(255);
}

