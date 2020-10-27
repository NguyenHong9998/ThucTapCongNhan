const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('./login/loginview',{signup:"SIGN UP"});
});

router.get('/signup',(req,res)=>{
    res.send('HELLO');
});

module.exports = router;