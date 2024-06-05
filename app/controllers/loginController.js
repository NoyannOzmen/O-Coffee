const bcrypt = require("bcryptjs"); 

const loginController = {
  loginPage: (req,res) => {
    res.render("connection");
  },

  userLogin: async (req,res) => {
/*     const userLogin = await bcrypt.hash(req.body.login, 8); */
    const userLogin = req.body.login;
    const userPassWord = await bcrypt.hash(req.body.password, 10);
    req.session.login = userLogin;
    req.session.password = userPassWord;
    req.flash('success', `Connecté avec succès ! Bienvenue, ${userLogin} !`);
    res.redirect('/');
  },
};

module.exports = loginController;