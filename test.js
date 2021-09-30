let gpiop = require('rpi-gpio').promise;

gpiop.setup(1, gpiop.DIR_OUT)
    .then(() => {
        return gpiop.write(1, true)
    })
    .catch((err) => {
        console.log('Error: ', err.toString())
    })
