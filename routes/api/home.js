/*
 * @Author: Riajul Islam 
 * @Date: 2019-08-21 11:51:12 
 * @Last Modified time: 2019-08-21 11:51:12 
 */

'use strict'
const express = require('express');
const router = express.Router();

const {home} = require("../urls");
const {index} = require('../../app/controller/HomeController');

router.get(home.HOME, index);

module.exports = router