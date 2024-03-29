import db from "../models";

const ROLES = db.ROLES;
const User = db.user;

const checkDuplicateUsernameOrEmail = (req, res, next) => {
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(200).send({ message: "Это имя пользователя уже используется!", success: false });
      return;
    }

    User.findOne({
      email: req.body.email,
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(200).send({ message: "Эта электронная почта уже используется!", success: false });
        return;
      }

      next();
    });
  });
};

const checkRolesExisted = (req, res, next) => {
  if (req.res.roles) {
    for (let role of req.body.roles) {
      if (!ROLES.includes(role)) {
        res.status(400).send({
          message: `Роль ${role} не зарегистрирована`,
        });
        return;
      }
    }
  }

  next();
};

const verifyRegister = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};

export default verifyRegister;
