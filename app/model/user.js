/*
 * @Author: Riajul Islam 
 * @Date: 2019-08-21 12:24:56 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-08-21 17:43:46
 */
'use strict'
const db = require('../../database/index');
const users = require('../../database/model/users');
function user() {
    this.postUser = (data) => {
        return users.postUser(data);
    }
    this.getUsers = () => {
        return users.gettUsers();
    }
    this.getUser = (id) => {
        return users.getUser(id);
    }
    this.updateUser = (id, name) => {
        return users.updateUser(id, name)
    }
    this.deleteUser = (id) => {
        return users.deleteUser(id);
    } 
}
module.exports = user;