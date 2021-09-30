let gpiop = require('rpi-gpio').promise;

gpiop.setup(14, gpiop.DIR_OUT)
    .then(() => {
        return gpiop.write(14, true)
    })
    .catch((err) => {
        console.log('Error: ', err.toString())
    })
