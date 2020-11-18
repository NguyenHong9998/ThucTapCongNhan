const express = require('express');
const { post } = require('./user.router');
const router = express.Router();

router.get('/:id',(req,res)=>{
    let id = req.params.id; 
    var postModel = require("../models/post.model");
    postModel.findById(id,(err,kq)=>{
        if (err){
            console.log("Co loi");
        }
        else {
            let listComment = kq.comments;
            res.json(listComment);
        }
    });
   
    
});
router.post('/post',(req,res)=>{
    console.log(req.body);
    // res.body.data la noi dung comment, ten user lay trong cookie, req.body._id la id cua bai viet
    res.json(null);
});
module.exports = router;