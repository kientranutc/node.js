var checkLogin =  {
    isLogin : (err, req, res, next)=> {
        var check =1;
        if (check==1) {
            next();
        } else {
            return res.redirect('/');
        }
    }

}
module.exports = checkLogin