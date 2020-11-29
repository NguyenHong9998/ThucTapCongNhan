const express = require('express');
const router = express.Router();
var postModel = require("../models/post.model");
router.get('',(req,res)=>{
    
    var user = {
        name: req.session.user.username
    }

   
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

router.post("/post",(req,res) =>{
    console.log(req.body);
    console.log("user=", req.session.user.username);
    time = require("../myModule/time").getTime();
    console.log("Time =",time);
    res.send("post");
    const myPost = {
        name : req.session.user.username,
        status: false,
        time_post :  require("../myModule/time").getTime(),
        id_school : req.body.school,
        comment : [{

        }]
    }
    
    //insert myPost
    postModel.create(myPost, function (err, small) {
        if (err) return handleError(err);
        console.log(small);
      });
})

module.exports = router;