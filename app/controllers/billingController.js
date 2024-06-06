const bcrypt = require("bcryptjs");

const billingController = {
  
  billingPage(req,res) {
    try {
      res.render("billing");
    }
    catch (error) {
      res.status(500).send(`Erreur de notre côté : ${error}`)
    }
  },
  userBilled: async (req,res) => {
    const userStreet = await bcrypt.hash(req.body.street, 10);
    const userZip = await bcrypt.hash(req.body.zip, 10);
    const userTown = await bcrypt.hash(req.body.city, 10);
    const userMore = await bcrypt.hash(req.body.bonus, 10);
    const userCardType = await bcrypt.hash(req.body.card, 10);
    const userCardNum = await bcrypt.hash(req.body.ccnum, 10);
    const userCardOwner = await bcrypt.hash(req.body.ccowner, 10);
    const userCardExpiry = await bcrypt.hash(req.body.ccexp, 10);
    const userCardCvv = await bcrypt.hash(req.body.cvv, 10);
    
    req.session.street = userStreet;
    req.session.zip = userZip;
    req.session.city = userTown;
    req.session.bonus= userMore;
    req.session.card = userCardType;
    req.session.ccnum = userCardNum;
    req.session.ccowner = userCardOwner;
    req.session.ccexp = userCardExpiry;
    req.session.cvv = userCardCvv;

    req.flash('success', `Votre commande a bien été prise en compte !`);
    res.redirect('/');
  },
};

module.exports = billingController;