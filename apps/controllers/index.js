var express = require("express");
var router = express.Router();

// router.use("/home", require(__dirname + "/homecontroller"));
router.use("/about", require(__dirname + "/aboutcontroller"));
// router.use("/service", require(__dirname + "/service/servicecontroller"));

router.get("/", function(req,res){
    res.render("about.ejs");
});
module.exports = router;