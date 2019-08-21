/*
 * @Author: Riajul Islam 
 * @Date: 2019-08-21 13:56:47 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-08-21 18:12:32
 */
'use strict'
const user = require('../../model/user');
exports.postUser = (req, res) => {
    return new user().postUser(req.body)
    .then((result) => {
        res.send({
            status: "success",
            message: "The user successfully inserted",
            data: result
        })
    })
    .catch((errors) => {
        res.send({
            status: "error",
            message: "The user insert failed",
            errors
        })
    })
}
exports.getUsers = (req, res) => {
    return new user().getUsers()
    .then((result) => {
        res.send({
            status: "success",
            message: "User data fetching success",
            data: result
        })
    })
    .catch((errors) => {
        res.send({
            status: "error",
            message: "The user data  fetching failed",
            errors
        })
    })
}
exports.getUser = (req, res) => {
    return new user().getUser(req.params.id)
    .then((result) => {
        res.send({
            status: "success",
            message: "The user data fetching success",
            data: result
        })
    })
    .catch((errors) => {
        res.send({
            status: "error",
            message: "The user data fetching failed",
            errors
        })
    })
}

exports.updateUser = (req, res) => {
    return new user().updateUser(req.params.id, req.body.name)
    .then((result) => {
        res.send({
            status: "success",
            message: "The user update success",
            data: result
        })
    })
    .catch((errors) => {
        res.send({
            status: "error",
            message: "The user update failed",
            errors
        })
    })
}
exports.deleteUser = (req, res) => {
    return new user().deleteUser(req.params.id)
    .then((result) => {
        res.send({
            status: "success",
            message: "The user delete success",
            data: result
        })
    })
    .catch((errors) => {
        res.send({
            status: "error",
            message: "The user delete failed",
            errors
        })
    })
}