const express = require("express");

/**
 * Note: Don't initialize a new app variable like this:
 * const app = express()
 * because it will create a new app.
 * Instead of const app, call a method of express Router
 * const route = express.Router() -> this will allows us to create different router
 * in a separate file.
 */

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

///////////////////// COMMENTS /////////////////////


/**
 app.get("/add-user", (req, res) => {
  res.render("add_user");
});

route.get("/add-user", (req, res) => {
  res.render("add_user");
});

exports.homeRoutes =  (req, res) => {
  res.render("add_user");

route.get("/add-user", services.homeRoutes);
});

 */