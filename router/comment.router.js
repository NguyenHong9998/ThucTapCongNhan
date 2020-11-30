const express = require('express');
const router = express.Router();
const time = require('node-get-time');

router.get('/:id',(req,res)=>{
    let id = req.params.id;
    console.log(id);
    var postModel = require("../models/post.model");
    postModel.findById(id,(err,kq)=>{
        if (err){
            console.log("Co loi");
        }
        else {
            let listComment = kq.comments;
            //console.log("Listcomment =",listComment);
            res.json(listComment);
        }
    });    
});
router.post('/post',(req,res)=>{
    console.log(req.body._id);
    console.log(req.body.data);
    var name;
    if (req.session.admin) {
        name="Admin";
    }
    else name=req.session.user.username;
    var time_now;
    time.gettime(function(res){
        time_now=res.dateTime;
    });
    var comment={
        name: name,
        content_comment: req.body.data,
        time: time_now
    }
    //console.log(comment);
    var postModel = require("../models/post.model");
    var postModel = require("../models/post.model");
    //var listComment=[];
    postModel.findById(req.body._id,(err,kq)=>{
        if (err){
            console.log("Co loi");
        }
        else {
            var listComment=[];
            var list=kq.comments;
            list.forEach(element => {
                listComment.push(element);
            });
            listComment.push(comment);
            postModel.findByIdAndUpdate(req.body._id,{comments:listComment}, function (err, kq) { 
                if (err){ 
                    console.log(err) 
                } 
                else{ 
                    //console.log("OK"); 
                } 
            }); 
        }
    });    
    res.json(comment);
});
module.exports = router;