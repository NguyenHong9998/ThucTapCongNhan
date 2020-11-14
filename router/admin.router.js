const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    var user = {
        name:"Admin"
    };
    var list_content = [];
    var post = require('../models/post.model');
    post.find({status:false}, (err, kq) => {
        if (err) {
        console.log("Loi roi ban oi");
        res.render('./login/signup');
        }
        else {
            kq.forEach(element => {
              //console.log(element);  
              let tmp = {
                _id: element._id,  
                name: element.name,
                content: element.content,
                time_post: element.time_post,
                id_school: element.id_school
              }
              list_content.push(tmp);
            });
            res.render('./admin/adminview',{user:user,list:list_content,admin:true});
        }    
    });    
});
router.get('/add-content/:id',(req,res)=>{
    let id = req.params.id; 
    var post = require('../models/post.model');
    post.findByIdAndUpdate(id,{status:true}, function (err, kq) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            //console.log("Removed User : ", docs); 
            res.redirect('/admin');
        } 
    }); 
});
router.get('/del-content/:id',(req,res)=>{
    let id = req.params.id; 
    var post = require('../models/post.model');
    post.findByIdAndRemove(id, function (err, kq) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            res.redirect('/admin');
        } 
    }); 
});
router.get('/checkuser',(req,res)=>{
    var user = {
        name:"Admin"
    };
    var list_content = [];
    var account = require('../models/account.model');
    var usermodel = require('../models/user.model');
    usermodel.find({isChecked:false}, (err, kq) => {
        if (err) {
        console.log("Loi roi ban oi");
        res.render('./login/signup');
        }
        else if (!kq) {
            res.render('./admin/checkuser',{user:user,admin:true});
            
        }
        else {
            kq.forEach(element => {
              //console.log(element);  
              list_content.push(element);
            });
            res.render('./admin/checkuser',{user:user,list:list_content,admin:true});
        }    
    });
});
router.get('/deleteuserview',(req,res)=>{
    var user = {
        name:"Admin"
    };
    var list_content = [];
    var account = require('../models/account.model');
    var usermodel = require('../models/user.model');
    usermodel.find({isChecked:true}, (err, kq) => {
        if (err) {
        console.log("Loi roi ban oi");
        res.render('./login/signup');
        }
        else if (!kq) {
            res.render('./admin/listAccount',{user:user,admin:true});
            
        }
        else {
            kq.forEach(element => {
              //console.log(element);  
              list_content.push(element);
            });
            res.render('./admin/listAccount',{user:user,list:list_content,admin:true});
        }    
    });
});
router.get('/add-user/:id',(req,res)=>{
    var id = req.params.id; 
    var user = require('../models/user.model');
    user.findByIdAndUpdate(id,{isChecked:true}, function (err, kq) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            //console.log("Removed User : ", docs); 
            res.redirect('/admin/checkuser');
        } 
    }); 
});
router.get('/del-user/:id',(req,res)=>{
    var id = req.params.id; 
    var account = require('../models/account.model');
    var user = require('../models/user.model');
    user.findByIdAndRemove(id, function (err, kq) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            //console.log("Removed User : ", docs); 
            account.deleteMany({name:kq.name_acc}, function (err, result) { 
                if (err){ 
                    console.log(err) 
                }else{ 
                    //console.log("Result :", result)  
                } 
            }); 
            res.redirect('/admin/checkuser');
        } 
    }); 
});
router.get('/deleteuser/:id',(req,res)=>{
    var id = req.params.id; 
    var account = require('../models/account.model');
    var user = require('../models/user.model');
    user.findByIdAndRemove(id, function (err, kq) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            //console.log("Removed User : ", docs); 
            account.deleteMany({name:kq.name_acc}, function (err, result) { 
                if (err){ 
                    console.log(err) 
                }else{ 
                    //console.log("Result :", result)  
                } 
            });  
            res.redirect('/admin/deleteuserview');
        } 
    }); 
});
module.exports = router;