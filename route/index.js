var userController = require("../controller/UserController.js");
var authController = require('../controller/backend/authController.js');
var dashboardController = require('../controller/backend/dashboardController.js');
var reportController = require('../controller/backend/reportController.js');
var checkLogin  = require("../middleware/checkLogin.js");
module.exports = (app, router) => {
    //=======================Frontend=======================
    app.group((router)=>{
        router.get("/", userController.index);
        router.get("/show", userController.display);
    });
    //=========================Backend======================
    app.get('/login', authController.login);
    app.post('/process-login', urlencodedParser, authController.procesLogin);
    app.group("/admin", (router) => {
        router.use(checkLogin.isLogin);
        router.get('', dashboardController.index);
        router.get('/report', reportController.index);
    });
}