const bcrypt = require("bcryptjs"); 

const loginController = {
  loginPage: (req,res) => {
    res.render("connection");
  },

  userLogin: async (req,res) => {
    const userLogin = await bcrypt.hash(req.body.login, 8);
    const userPassWord = await bcrypt.hash(req.body.password, 10);
    req.session.login = userLogin;
    req.session.password = userPassWord;
    res.redirect("/");
  },
};

module.exports = loginController;