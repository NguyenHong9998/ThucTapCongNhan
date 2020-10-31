const express = require('express');
const router = express.Router();
var bcrypt = require('bcrypt');

router.get('/',(req,res)=>{
    res.render('./login/loginview',{signup:"SIGN UP"});
});

router.post('/',(req,res)=>{
    var account = require('../models/account.model');
    var values = {
        name: req.body.name
    }
    account.findOne({name:req.body.name}, (err, kq) => {
        if (err) {
        console.log("Loi roi ban oi");
        res.render('./login/loginview',{signup:"SIGN UP"});
        }
        else if (!kq) {
            res.render('./login/loginview',{signup: 'SIGN UP', notfound: 'Tài khoản không tồn tại', values: values});
        }
        else {
            bcrypt.compare(req.body.pass, kq.pass, function(err, kt) {
                if (kt==false) {
                    res.render('./login/loginview',{signup: 'SIGN UP', wrong: 'Mật khẩu không đúng', values: values});
                }
                else {
                    if (kq.name=="admin") res.redirect('/admin');
                        else res.redirect('/user');
                }
            });
        }
    });    
});

router.get('/signup',(req,res)=>{
    res.render('./login/signup');
});

router.post('/signup',(req,res)=>{
    var account = require('../models/account.model');
    var user = require('../models/user.model');
    var values = {
        fullname: req.body.fullname,
        mail: req.body.mail,
        phone: req.body.phone,
        job: req.body.job,
        office: req.body.office,
        name: req.body.name
    }
    user.findOne({mail:req.body.mail}, (err, kq) => {
        if (err) {
        console.log("Loi roi ban oi");
        res.render('./login/signup');
        }
        else if (kq) {
            kt=false;
            res.render('./login/signup',{ mail_found: 'Tài khoản mail này đã sử dụng', values: values});
        }
        else {
            account.findOne({name:req.body.name}, (err, kq) => {
                if (err) {
                console.log("Loi roi ban oi");
                res.render('./login/signup');
                }
                else if (kq) {
                    kt=false;
                    res.render('./login/signup',{ found: 'Tên đăng nhập đã tồn tại', values: values});
                }
                else {
                    bcrypt.genSalt(10, function(err, salt) {
                        bcrypt.hash(req.body.pass, salt, function(err, hash) {
                            var new_account = new account({
                                name: req.body.name,
                                pass: hash,
                                check_admin: false
                            })
                            new_account.save();
                        });
                    });
                    var new_user = new user({
                        avatar: '',
                        name: req.body.fullname,
                        mail: req.body.mail,
                        phone: req.body.phone,
                        job: req.body.job,
                        office: req.body.office,
                        isChecked: false,
                        name_acc: req.body.name
                    })
                    new_user.save();
                    if (req.body.name=="admin") res.redirect('/admin');
                        else res.redirect('/user');
                }
            });
        }
    });
});

module.exports = router;