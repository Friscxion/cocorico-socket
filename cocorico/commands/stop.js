module.exports=()=>{
    const in1=14;
    const in2=15;
    const Gpio = require('pigpio').Gpio;
    const forward = new Gpio(in1, {mode: Gpio.OUTPUT});
    const back = new Gpio(in2, {mode: Gpio.OUTPUT});
    forward.pwmWrite(0);
    back.pwmWrite(0);
}
