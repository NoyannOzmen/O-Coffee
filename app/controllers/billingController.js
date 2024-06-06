const billingController = {

  billingPage(req,res) {
    try {
      res.render("billing");
    }
    catch (error) {
      res.status(500).send(`Erreur de notre côté : ${error}`)
      }
    },
};

module.exports = billingController;