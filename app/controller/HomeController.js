/*
 * @Author: Riajul Islam 
 * @Date: 2019-08-21 11:47:35 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-08-21 18:10:03
 */
'use strict'

exports.index = (req, res) => {
    res.send({
        status: "success",
        message: "Well Hello There",
        data: {
            author: 'Riajul Islam',
            contact: 'riaj.csp@gmail.com'
        }
    })
}