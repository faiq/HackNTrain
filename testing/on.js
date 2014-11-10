var mraa = require('mraa');

var pin = new mraa.Gpio(3);
pin.dir(mraa.DIR_OUT);
pin.write(1);

setInterval(function() {
    console.log('still running');
}, 1000);