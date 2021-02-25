import config from "../config/auth.config";
import db from "../models";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const User = db.user;
const Role = db.role;

export const register = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    progress: {},
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles },
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "Пользователь был успешно зарегистрирован!", success: true, id: user.id });
          });
        }
      );
    }
  });
};

export const login = (req, res) => {
  User.findOne({
    email: req.body.email,
  })
    .populate("roles", "-__v") // not sure about it
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        res.status(200).send({ message: "Пользователь не найден" });
        return;
      }

      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

      if (!passwordIsValid) {
        return res.status(200).send({ accessToken: null, message: "Неверный пароль" });
      }

      const token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 86400 }); // 1 сутки

      const authorities = [];

      for (let role of user.roles) {
        authorities.push("ROLE_" + role.name.toUpperCase());
      }

      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        progress: user.progress,
        roles: authorities,
        accessToken: token,
      });
    });
};
