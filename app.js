var express = require('express');
require('express-group-routes');
var app = express();
var router = express.Router();
var connect = require('./config/connect_db.js');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var oldInput = require('old-input');
app.use(expressSession({
    secret: 'secret',
    resave: true,
    saveUninitialized: false
}));
app.use(oldInput);
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//connect global
global.db = connect;
global.urlencodedParser = urlencodedParser;
// call routes
require('./route/index.js')(app,router);
// config assets
app.use(express.static('public'));
//config views
app.set('views', './views');
app.set('view engine', 'twig');
//config run server
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("app listening at http://%s:%s", host, port)
})