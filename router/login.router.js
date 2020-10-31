const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('./login/loginview',{signup:"SIGN UP"});
});

router.post('/',(req,res)=>{
    var account = require('../models/account.model');
    var body = req.body;
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
            if (kq.pass!=req.body.pass) {
                res.render('./login/loginview',{signup: 'SIGN UP', wrong: 'Mật khẩu không đúng', values: values});
            }
            else {
                if (kq.name=="admin") res.redirect('/admin');
                    else res.redirect('user');
            }
        }
    });    
});

router.get('/signup',(req,res)=>{
    res.render('./login/signup');
});

module.exports = router;