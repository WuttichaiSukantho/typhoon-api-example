var routers = require("express").Router();

// Import all route files
const opentyphoonRoutes = require('./opentyphoonRoutes');

// Use routes
routers.use(opentyphoonRoutes);

module.exports = routers;