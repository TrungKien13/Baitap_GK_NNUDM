var express = require("express");
var router = express.Router();

router.use("/", function(req,res){
    res.redender("index.ejs");
});
module.exports = router;
