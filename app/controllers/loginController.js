const loginController = {
  loginPage: (req,res) => {
    res.render("connection");
  },

  userLogin: (req,res) => {
    const userLogin = req.body.login;
    const userPassWord = req.body.password;
    req.session.login = userLogin;
    req.session.password = userPassWord;
    console.log(req.session);
    res.redirect("/");
  },
};

module.exports = loginController;