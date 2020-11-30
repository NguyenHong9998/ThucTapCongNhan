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
  
    const myPost = {
        name : req.session.user.username,
        content : req.body.post,
        status: false,
        time_post :  require("../myModule/time").getTime(),
        id_school : req.body.school,
        comment : [{

        }]
    }
    console.log("post =",myPost)
    
    //insert myPost
    postModel.create(myPost, function (err, small) {
        if (err) return handleError(err);
        console.log(small);
      });
    res.redirect("/user");
})

module.exports = router;