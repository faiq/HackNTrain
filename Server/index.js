var express = require('express')
  , bodyParser = require('body-parser') 
  , path = require('path')
  , http = require('http')
  , ejs = require('ejs')
  , app = express()
  , server = http.createServer(app)

app.set('views', path.join(__dirname, 'views')) //tell our webserver to look for views in a folder called views
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.get('/', function (req, res) { 
  res.render('index') 
}) //

server.listen(5000)
