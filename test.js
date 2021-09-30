var gpio = require('rpi-gpio');

gpio.setup(14, gpio.DIR_OUT, ()=>{
    gpio.output(14,gpio.DIR_HIGH,(e)=>{
        console.log("e")
    })
});
