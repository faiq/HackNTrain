var PololuLedStrip = require('../tesla/lib/PololuLedStrip');

var myLEDStrip = new PololuLedStrip(4);

var colors = [
    {
        r: 255,
        g: 255,
        b: 255
    },
    {
        r: 255,
        g: 0,
        b: 0
    },
    {
        r: 0,
        g:255,
        b: 0
    }
];

myLEDStrip.write(colors);
