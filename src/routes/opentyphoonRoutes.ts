const controller = require("../controllers");

var router = require("express").Router();

router.get("/opentyphoon", controller.opentyphoonController.serch);

module.exports = router;
