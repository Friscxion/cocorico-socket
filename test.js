const rpio = require("rpio");
const IN1=14;
const IN2=15;
let options = {
    gpiomem: false,          /* Use /dev/gpiomem */
    mapping: 'gpio',    /* Use the P1-P40 numbering scheme */
    close_on_exit: true,    /* On node process exit automatically close rpio */
}

rpio.init(options)
rpio.open(IN1,rpio.PWM)
rpio.pwmSetClockDivider(64);
rpio.pwmSetRange(IN1, 1024);
rpio.pwmSetData(IN1, 512);
