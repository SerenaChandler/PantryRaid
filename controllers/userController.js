const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  save: createUser,
  // function (req, res) {
  //   db.User.create(req.body)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  
  remove: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  loginCred,
};

async function loginCred(req,res){
  try {
    console.log("loginCred", req.body);
    const userData = await db.User.findOne({ where: { name: req.body.name } });

    if (!userData){
        res.status(400).json({message:'Incorrect Username or Password, please try again'});
        return;
    }

    const validPass = await userData.checkPassword(req.body.password);

    if (!validPass){
        res.status(400).json({message:'Incorrect Username or Password, please try again'});
        return;
    }

    // req.session.save(() => {
    //     req.session.user_id = userData.id;
    //     req.session.logged_in = true;
        
    //     res.json({ user: userData, message: 'You Are Now Logged In!'});
    // });
    console.log('Logged In');
    res.json({user: userData, loggedIn: true});
    
} catch (err) {
    res.status(400).json(err);
};
};

async function createUser(req,res){
  try {
    const userData = await db.User.create(req.body);
    console.log(userData);
    // req.session.save(() => {
    //     req.session.user_id = userData.id;
    //     req.session.logged_in = true;
    //     res.status(200).json(userData);
    // });
    res.json({user: userData, loggedIn: true});
} catch (err) {
    res.status(400).json(err);
};
};