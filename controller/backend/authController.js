
var authController = {
    login : (req, res)=>{
        res.render('frontend/login',{
            oldInput: req.oldInput
        });
    },
    procesLogin :(req, res)=>{
        var response = {
            first_name:req.body.username,
            last_name:req.body.password
        };
        console.log(response.first_name);
        res.render('frontend/login',{
            username: response.first_name,
        });
    }


}

module.exports = authController;