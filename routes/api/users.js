const app = require('../../ethereum/connection/app');
const router = require("express").Router();
const auth = require("../auth");
const User = require("../../models/User");

//POST new user route (optional, everyone has access)
router.post("/", (req, res, next) => {
  const {
    body: { user }
  } = req;

  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: "is required"
      }
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: "is required"
      }
    });
  }

  const finalUser = new User(user);

  return finalUser
    .save()
    .then(() => res.json({ user: finalUser.toAuthJSON() }))
    .catch(e => res.status(422).json(e));
});

//POST login route (optional, everyone has access)
router.post("/login", (req, res, next) => {
  const {
    body: { user }
  } = req;

  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: "is required"
      }
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: "is required"
      }
    });
  }

  User.findOne({ email: user.email }).then(async authUser => {
    let authSuccess = authUser.validatePassword(user.password);
    if (authSuccess === false) {
      res.status(401).json({
        message: "Wrong username or password"
      });
    }
    return res.json(authUser.toAuthJSON());
  });
});

//GET current route (required, only authenticated user have access)
router.get("/current", auth.required, (req, res, next) => {
  const { id } = req.user;

  return User.findById(id).then(user => {
    if (!user) {
      return res.status(404).json({
        message: "Not Found"
      });
    }

    return res.json({ user });
  });
});


// Users for verification
router.get('/to-verify-donar', auth.required, (req, res, next) => {
    return User.find({ userType: 'Donar', status: false }).then(results => {
      return res.json(results);
    });
});

router.get('/to-verify-donar/:id/verify', auth.required, (req, res, next) => {
  return User.findOneAndUpdate({ _id: req.params.id, userType: 'Donar' }, {$set:{status: true}},
  {
      returnNewDocument: true
  }).then(results => {
    return res.json(results);
  });
});

router.get('/to-verify-receiver', auth.required, (req, res, next) => {
  return User.find({ userType: 'Receiver', status: false }).then(results => {
    return res.json(results);
  });
});

router.get('/to-verify-receiver/:id/verify', auth.required, (req, res, next) => {
  return User.findOneAndUpdate({ _id: req.params.id, userType: 'Receiver' }, {$set:{status: true}},
  {
      returnNewDocument: true
  }).then(results => {
    return res.json(results);
  })
  .catch(e => {
    res.send(400).json({ message: 'Some error occured' })
  });
});


router.get('/get-details/:eth', (req, res, next) => {
  return User.find({ ethAddress: req.params.eth }).then(
    response => { console.log(response); res.json(response)}
  )
});

const algorithm = (donor, receiver) => {
  if(receiver.bloodGroup != 'ab' || receiver.rhFactor != '+ve') return 0;
  else if(donor.bloodGroup != receiver.bloodGroup || donor.rhFactor != receiver.rhFactor) return 0;
  return app.getPriority(receiver.ethAddress).then(
    response => response
  );
};

router.post('/algorithm', (req, res, next) => {
  // req.body.data has blockchain data
  let idealReceiver, idealPriority = 0;


  User.findOne({ ethAddress: req.body.donor }).then(
    result => {
      for (var i = 0; i < Math.min(req.body.data.length, 10); i++) {
        User.findOne({ ethAddress: item }).then(response => {
          if (algorithm(result, response) > idealPriority) {
            idealPriority = algorithm(result, response);
            idealReceiver = response;
          }
        });
      }
      res.json({
        idealReceiver
      });
    }
  );
})

module.exports = router;
