const express = require('express');
const router = express.Router();

router.get('/:id',(req,res)=>{
    let id = req.params.id; // id cua bai viet de tim comment
    let com = ["Mai Thi:  dghsadhshakdas","Anh tue:  hdjshdjkas","Mai Thi:  dghsadhshakdas","Anh tue:  hdjshdjkas","Mai Thi:  dghsadhshakdas","Anh tue:  hdjshdjkas","Mai Thi:  dghsadhshakdas","Anh tue:  hdjshdjkas","Mai Thi:  dghsadhshakdas","Anh tue:  hdjshdjkas","Mai Thi:  dghsadhshakdas","Anh tue:  hdjshdjkas","Mai Thi:  dghsadhshakdas","Anh tue:  hdjshdjkas","Mai Thi:  dghsadhshakdas","Anh tue:  hdjshdjkas"]; //comment mau
    res.json(com);
});
router.post('/post',(req,res)=>{
    console.log(req.body);
    // res.body.data la noi dung comment, ten user lay trong cookie, req.body._id la id cua bai viet
    res.json(null);
});
module.exports = router;