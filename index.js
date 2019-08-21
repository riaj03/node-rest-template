/*
 * @Author: Riajul Islam 
 * @Date: 2019-08-21 11:28:21 
 * @Last Modified time: 2019-08-21 11:35:26
 */
'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set("view engine", "ejs"); 
app.set("views", __dirname + "/app/view"); 
app.use(bodyParser.urlencoded({ extended: false })); 

const config = require("./config/index");

app.listen(config.DEFAULT_PORT, () => { 
    console.log(`HTTP service ready on port: ${config.DEFAULT_PORT}`);
    app.use( require('./routes'));
})