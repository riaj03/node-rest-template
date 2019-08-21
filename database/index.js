/*
 * @Author: Riajul Islam 
 * @Date: 2019-08-21 12:22:39 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-08-21 18:12:51
 */
'use strict'
var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "nodeTest",
  multipleStatements : true
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Mysql Connection success!");
});
module.exports = db;