const express = require("express");
const route = express.Router(); // allows to create different router on different files

const services = require("../services/render");
const controller = require("../controller/controller");
/**
 * @description Root Route
 * @method GET /
 */

route.get("/", services.homeRoutes);

/**
 * @description Add User Route
 * @method GET /add-user
 */

route.get("/add-user", services.add_user);

/**
 * @description Update Route
 * @method GET /update-user
 */

route.get("/update-user", services.update_user);

// API route
route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);

// export routes
module.exports = route;
