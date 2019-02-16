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

module.exports = router;