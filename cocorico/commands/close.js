module.exports=()=>{
    const Gpio = require('pigpio').Gpio;
    let in2 = 15;
    const led = new Gpio(in2, {mode: Gpio.OUTPUT});
    led.pwmWrite(255);
}
