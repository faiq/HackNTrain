var express = require('express')
  , bodyParser = require('body-parser') 
  , path = require('path')
  , http = require('http')
  , ejs = require('ejs')
  , net = require('net') //this will be the listening thing
  , Ready = require('ready-signal')
  , app = express()
  , r1 = new Ready()
  , server = http.createServer(app)
  , io  = require('socket.io')(server)

app.set('views', path.join(__dirname, 'views')) //tell our webserver to look for views in a folder called views
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

//app.get('/', function (req, res) { 
  //res.render('index', {noOfTabs : 02}) 
   r1(function () { 
        console.log('yoooooo')
    })                
//})
  
io.on('connection', function (socket) { 
  r1()
})

server.listen(8080)


//TCP SERVER
