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

router.post('/search',(req,res)=>{
    
    var user = {
        name: req.session.user.username
    }

    var condition = {
        status : true,
    }

    let FilterBy = req.body.FilterBy 
    let KeyWord = ".*"+req.body.KeyWord + ".*"

    if (KeyWord.length>0){
    switch(FilterBy) {
        case 'School':
          condition.id_school = { $regex: KeyWord }
          break;
        case 'User':
          condition.name = { $regex: KeyWord }
          break;
        case 'Content':
          condition.content = { $regex: KeyWord }
        default:
            
      }
    }
   
    postModel.find(condition,(err, kq) => {
        if (err) {
        console.log("Loi roi ban oi");
        }
        else if (!kq) {
            res.render('./user/userview');
        }
        else {
            var list_content = kq;
            console.log("kq=",kq);
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
        console.log("small =",small);
      });
    res.redirect("/user");
})

module.exports = router;