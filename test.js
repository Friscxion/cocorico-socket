const rpio = require("rpio");
const IN1=14;
const IN2=15;

rpio.open(IN1,rpio.PWM)
rpio.pwmSetClockDivider(64);
rpio.pwmSetRange(IN1, 1024);
rpio.pwmSetData(IN1, 512);
