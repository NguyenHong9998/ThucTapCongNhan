const express = require('express');
const router = express.Router();

router.get('',(req,res)=>{
    
    var user = {
        name: req.session.user.username
    }

    var postModel = require("../models/post.model");
    postModel.find({status:true},(err, kq) => {
        if (err) {
        console.log("Loi roi ban oi");
        }
        else if (!kq) {
            res.render('./user/userview');
        }
        else {
            var list_content = kq;
            res.render('./user/userview',{user:user,list:list_content});
        }
    });    
    
});

module.exports = router;