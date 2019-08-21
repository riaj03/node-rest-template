/*
 * @Author: Riajul Islam 
 * @Date: 2019-08-21 11:51:12 
 * @Last Modified time: 2019-08-21 11:51:12 
 */

'use strict'
const express = require('express');
const router = express.Router();
const {users} = require("../urls");
const {
    postUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
} = require('../../app/controller/User/UserController');

router.post(users.POST_USER, postUser);
router.get(users.GET_USERS, getUsers);
router.get(users.GET_USER, getUser);
router.put(users.PUT_USER, updateUser);
router.delete(users.DELETE_USER, deleteUser);
module.exports = router