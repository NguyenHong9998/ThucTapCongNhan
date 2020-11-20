var checkSignIn = (req,res,next) => {
    if (req.session.admin){
        var accountModel = require("../models/account.model");
        accountModel.findOne({name: req.session.admin.username},(err,kq)=>{
            console.log(kq)
            if (!kq){
                return;
            }
            else {
                console.log(kq);
                next();
            }
        })

    }
    else {
        res.redirect("/login")
        return;
    }
}
module.exports = {
    checkSignIn,
}
