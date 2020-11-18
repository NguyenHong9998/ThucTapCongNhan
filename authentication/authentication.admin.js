function checkSignIn (req,res,next) {
    if (req.session.admin){
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
