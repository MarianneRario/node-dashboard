// this file will allow rendering of files using router

exports.homeRoutes = (req, res) => {
  res.render("index");
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.update_user = (req, res) => {
  res.render("update_user");
};
