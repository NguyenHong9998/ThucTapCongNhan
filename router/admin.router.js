const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    var user = {
        name:"Admin"
    };
    console.log(req.session.user)
    var list_content = [
        {
            _id: "idforAnhTue1111111",
            name: "Anh Tue",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
            status:true,
            time_post:"26/10/2020 13:48:00",
            id_school:"DUT"   
        },
        {
            _id: "idforAnhTue2222222",
            name: "Anh Tue 3",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
            status:true,
            time_post:"25/10/2020 13:48:00",
            id_school:"UEH"   
        },
        {
            _id: "idforAnhTue3333333",
            name: "Anh Tue 22",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
            status:true,
            time_post:"25/10/2020 13:48:00",
            id_school:"FTU"   
        }
    ];
    res.render('./admin/adminview',{user:user,list:list_content,admin:true});
});
router.get('/add-content/:id',(req,res)=>{
    let id = req.params.id; //id bai viet can duyet
    res.send(id); 
});
router.get('/del-content/:id',(req,res)=>{
    let id = req.params.id; // id bai viet can xoa
    res.send(id); 
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
            console.log
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
            console.log
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