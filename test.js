var gpio = require('rpi-gpio');

gpio.setup(14, gpio.DIR_OUT, ()=>{
    gpio.write(14,true,(e)=>{
        console.log("e")
    })
});
