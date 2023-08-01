// controllers for rendering home page
module.exports.home = function (req, res) {
  return res.render("home", {
    title: "Elderly Care",
  });
};
