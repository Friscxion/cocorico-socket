var gpio = require('rpi-gpio');

gpio.setMode(gpio.MODE_BCM)

gpio.setup(14, gpio.DIR_OUT, ()=>{
    gpio.output(14,gpio.DIR_HIGH,(e)=>{
        console.log("e")
    })
});
gpio.setup(15, gpio.DIR_OUT, ()=>{
    gpio.output(15,gpio.DIR_LOW,(e)=>{
        console.log("e")
    })
});

setTimeout(()=>{},5000)
