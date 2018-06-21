var user = require('../models/user.js');

var userController = {
    index: (req, res)=> {
        db.connect(function(err) {
            db.query("SELECT * FROM news", function (err, result, fields) {
                res.render('frontend/index', {
                    data:result
                });
            });
        });
    },
    display: (req, res) => {
        db.connect(function(err) {
            db.query("SELECT * FROM news", function (err, result, fields) {
                res.render('frontend/blog', {
                    data:result
                });
            });
        });
    }

}
module.exports = userController;