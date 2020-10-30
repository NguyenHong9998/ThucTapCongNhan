const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    var account = require('../models/account.model');
    account.find({}, (err, res) => {
        if (err) {
        console.log("loi roi ban oi");
        return;
        }
        else if (!res) {
            console.log("khong co");
        }
        else {
            res.forEach(tg => {
                console.log(tg.name);
                console.log(tg.pass);
            });
        }
    });
    res.render('./login/loginview',{signup:"SIGN UP"});
});

router.post('/',(req,res)=>{
    res.render('./login/loginview',{signup:"SIGN UP"});
});

router.get('/signup',(req,res)=>{
    res.render('./login/signup');
});

module.exports = router;