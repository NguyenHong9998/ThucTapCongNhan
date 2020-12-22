const express = require('express');
const router = express.Router();
const time = require('node-get-time');
var postModel = require("../models/post.model");
router.get('',(req,res)=>{
    
    var user = {
        name: req.session.user.username
    }
   
    postModel.find({status:true}, null, {sort: {time_post:-1}}, (err, kq) => {
        if (err) {
        console.log("Loi roi ban oi");
        }
        else if (!kq) {
            res.render('./user/userview');
        }
        else {
            var list_content = kq;
            if (req.session.alert!=null) {
                req.session.alert=null;
                res.render('./user/userview',{user:user,list:list_content,alert:true});
            }
            else res.render('./user/userview',{user:user,list:list_content});
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
    var time_now;
    time.gettime(function(res){
        time_now=res.dateTime;
    });
    const myPost = {
        name: req.session.user.username,
        content: req.body.post,
        status: false,
        time_post:  time_now,
        id_school: req.body.school,
        comment : [{

        }]
    }
    console.log("post =",myPost)
    
    //insert myPost
    postModel.create(myPost, function (err, small) {
        if (err) return handleError(err);
        console.log("small =",small);
      });
    req.session.alert=true;
    res.redirect("/user");
})

module.exports = router;