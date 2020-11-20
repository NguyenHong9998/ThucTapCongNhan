const express = require('express');
const router = express.Router();

router.get('',(req,res)=>{
    
    user = {
        name: req.session.user.username
    }

    var postModel = require("../models/post.model");
    postModel.find((err, kq) => {
        if (err) {
        console.log("Loi roi ban oi");
        }
        else if (!kq) {
            res.render('./user/userview');
        }
        else {
            list_content = kq;
            res.render('./user/userview',{user:user,list:list_content});
        }
    });    
    
});

module.exports = router;