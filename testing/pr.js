var PhotoResistor = require('../tesla/lib/PhotoResistor');

var pr = new PhotoResistor(3, 1);

setInterval(function() {
    // 902 seems to be bright, 700 seems to be dark
    pr.getLight(console.log);
}, 1000);