var mraa = require('mraa');

var led = new mraa.Gpio(2);
led.dir(mraa.DIR_OUT);

var ledState = true;

setInterval(function() {
    led.write(ledState?1:0);
    ledState = !ledState;
}, 1000);