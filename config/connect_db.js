
var mysql = require('mysql');
var config = require('../config/db_config.js')
var con = mysql.createConnection(config);
module.exports = con;