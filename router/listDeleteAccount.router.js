const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    var id = req.body.id; // id cua bai viet de tim comment
    console.log("da nhan roi: "+id);
    res.redirect('/');
    //res.json(com);
});
router.get('/',(req,res)=>{
    res.redirect('/');
});
module.exports=router;