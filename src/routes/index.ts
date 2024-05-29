const controllers = require('../controllers');

var routes = require("express").Router();

routes.get("/", controllers.controller.basicController.get)

routes.post("/opentyphoon", controllers.controller.opentyphoonController.serch)


module.exports = routes;
