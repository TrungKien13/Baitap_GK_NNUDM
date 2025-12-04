var express = require("express");
var router = express.Router();

router.use("/home", require(__dirname + "/homecontroller"));
router.use("/about", require(__dirname + "/aboutcontroller"));
router.use("/service", require(__dirname + "/servicecontroller"));

router.get("/", function(req,res){
    res.render("index.ejs");
});
module.exports = router;