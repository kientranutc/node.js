var reportController = {
    index:(req, res)=> {
        var data = null;
        db.connect(function(err) {
            db.query("SELECT * FROM amount limit 2", function (err, results, fields) {
                data =results;
            });
        });
        console.log(data);
        db.connect(function(err) {
            db.query("SELECT * FROM amount", function (err, result, fields) {
                res.render('backend/page/report/index');
            });
        });
    }
}
module.exports = reportController;