var mpaa = require('mpaa');
// https://github.com/adafruit/Adafruit_TCS34725/blob/master/Adafruit_TCS34725.h

var TCS34725_ADDRESS = 0x29;
var TCS34725_COMMAND_BIT = 0x80;
var TCS34725_ENABLE = 0x00;
var TCS34725_ENABLE_PON = 0x01;
var TCS34725_ENABLE_AEN = 0x02;
var TCS34725_ATIME = 0x01;
var TCS34725_GAIN_1X = 0x00;   /**<  No gain  */
var TCS34725_GAIN_4X = 0x01;   /**<  2x gain  */
var TCS34725_GAIN_16X = 0x02;   /**<  16x gain */
var TCS34725_GAIN_60X = 0x03;   /**<  60x gain */
var TCS34725_INTEGRATIONTIME_2_4MS = 0xFF;   /**<  2.4ms - 1 cycle    - Max Count: 1024  */
var TCS34725_INTEGRATIONTIME_24MS = 0xF6;   /**<  24ms  - 10 cycles  - Max Count: 10240 */
var TCS34725_INTEGRATIONTIME_50MS = 0xEB;   /**<  50ms  - 20 cycles  - Max Count: 20480 */
var TCS34725_INTEGRATIONTIME_101MS = 0xD5;   /**<  101ms - 42 cycles  - Max Count: 43008 */
var TCS34725_INTEGRATIONTIME_154MS = 0xC0;   /**<  154ms - 64 cycles  - Max Count: 65535 */
var TCS34725_INTEGRATIONTIME_700MS = 0x00;   /**<  700ms - 256 cycles - Max Count: 65535 */

var TCS34725_CDATAL = 0x14;    /* Clear channel data */
var TCS34725_CDATAH = 0x15;
var TCS34725_RDATAL = 0x16;    /* Red channel data */
var TCS34725_RDATAH = 0x17;
var TCS34725_GDATAL = 0x18;    /* Green channel data */
var TCS34725_GDATAH = 0x19;
var TCS34725_BDATAL = 0x1A;    /* Blue channel data */
var TCS34725_BDATAH = 0x1B;

var TCS34725 = function() {
    this._i2c = new mraa.I2c(0);
    this._i2c.address(TCS34725_ADDRESS);

};

TCS34725.prototype.enable = function(cb) {
    this._i2c.writeReg(TCS34725_ENABLE, TCS34725_ENABLE_PON);
    setTimeout(function() {
        this._i2c.writeReg(TCS34725_ENABLE, TCS34725_ENABLE_PON | TCS34725_ENABLE_AEN);
    }, 3);
};

TCS34725.prototype.begin = function() {
    writeReg(TCS34725_ATIME, TCS34725_INTEGRATIONTIME_50MS);
    writeReg(TCS34725_CONTROL, TCS34725_GAIN_4X);
};

TCS34725.prototype.read16 = function(reg) {
    // send the begin transmission



    // send the end transmission
};

TCS34725.prototype.getRGB = function() {
    var c = this._i2c.read16(TCS34725_CDATAL);
    var r = this._i2c.read16(TCS34725_RDATAL);
    var g = this._i2c.read16(TCS34725_GDATAL);
    var b = this._i2c.read16(TCS34725_BDATAL);
};

module.exports = TCS34725;