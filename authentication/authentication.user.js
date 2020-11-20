var checkSignIn = (req,res,next) => {
    
    if (req.session.user){
        var accountModel = require("../models/account.model");
        accountModel.findOne({name: req.session.user.username},(err,kq)=>{
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
