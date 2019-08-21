/*
 * @Author: Riajul Islam 
 * @Date: 2019-08-21 11:31:53 
 * @Last Modified time: 2019-08-21 11:36:39
 */

'use strict'
const express = require('express');
const router = express.Router();
const home  = require('../routes/api/home');
const users = require('../routes/api/users');

router.use(home);
router.use(users);

module.exports = router