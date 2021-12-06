var UserDB = require("../model/model"); //require the schema from model folder

// create and save new user
exports.create = (req, res) => {
  //validate request
  if (!req.body) {
    return res.status(400).send({ message: "Content cannot be empty!" });
    
  } else if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).send({ message: "Incomplete input parameters!" });

  }

  //create a new user
  const user = new UserDB({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    timestamp: Date.now(),
  });

  //save user in db
  user
    .save(user)
    .then((data) => {
      res.redirect("/add-user");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occured while creating a user...",
      });
    });
};

// retrieve and return all users / retrieve and return a single user
exports.find = (req, res) => {
  if (req.query.id) {
    // if there is email parameter
    const id = req.query.id;
    UserDB.findById(id)
      .then((data) => {
        if (!data) {
          return res.status(404).send("Error: User cannot be found...");
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send("Error: Incorrect user information.");
      });
  } else {
    UserDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error occured while retrieving user/s...",
        });
      });
  }
};

// update a user by user email
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: err.message || "Error: Data to update cannot be empty!",
    });
  } else if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).send({ message: "Incomplete input parameters!" });
  }
  const id = req.params.id;
  UserDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .send("Error: User cannot be updated/not found...");
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send("Error: Incorrect user information.");
    });
};

// delete a user by user email
exports.delete = (req, res) => {
  const id = req.params.id;
  UserDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .send("Error: User cannot be deleted/not found...");
      } else {
        res.send({ message: "User was deleted successfully!" });
      }
    })
    .catch((err) => {
      res.status(500).send("Error: Incorrect user information.");
    });
};
