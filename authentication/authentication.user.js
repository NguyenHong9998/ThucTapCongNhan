function checkSignIn (req,res,next) {
    if (req.session.user){
        next();
    }
    else {
        res.redirect("/login")
        return;
    }
}
module.exports = {
    checkSignIn,
}
