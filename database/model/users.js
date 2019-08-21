/*
 * @Author: Riajul Islam 
 * @Date: 2019-08-21 12:50:32 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-08-21 18:04:00
 */

'use strict'
const db = require('../../database/index');
exports.postUser = (data) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO users(name, address, email) VALUES ("${data.name}","${data.email}","${data.address}")`, function(err, result){
            if(err) {
                reject({msg: err.sqlMessage})
            }
            resolve(result)
        })  
    })
}
exports.gettUsers = async() => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM users`, function(err, result){
            if(err) {
                reject({msg: err.sqlMessage})
            }
            resolve(result)
        })  
    })
}
exports.getUser = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM users where id = ${id}`, function(err, result){
            if(err) {
                reject({msg: err.sqlMessage})
            }
            resolve(result)
        })  
    })
}
exports.updateUser = (id, name) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE users SET name = "${name}"  WHERE id = ${id}`, function(err, result){
            if(err) {
                reject({msg: err})
            }
            resolve(result)
        })  
    })
}
exports.deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE from users WHERE id = ${id}`, function(err, result){
            if(err) {
                reject({msg: err})
            }
            resolve(result)
        })  
    })
}