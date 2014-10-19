var TMP36 = require('../tesla/lib/TMP36');

var tempSensor = new TMP36(0);

setInterval(function() {
    console.log(tempSensor.CtoF(tempSensor.getTemp()));
}, 1000);