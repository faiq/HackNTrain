
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path'),
    MPL115A1 = require('lib/MPL115A1'),
    MQ4 = require('lib/MQ4'),
    PhotoResistor = require('lib/PhotoResistor'),
    TMP36 = require('lib/TMP36');


var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.post('/lights', routes.lights);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

// set up the listening for the color sensor

var pressureSensor = new MPL115A1(0);
var methaneSensor = new MQ4(9);
var pr = new PhotoResistor(15);
var tempSensor = new TMP36(9);


setInterval(function() {
    // every 1 sec, get some sensor data for now
    console.log(pressureSensor.getPressure());
    console.log(methaneSensor.getMethaneLevel());
    console.log(pr.getLight());
    console.log(tempSensor.getTemp());
}, 1000);