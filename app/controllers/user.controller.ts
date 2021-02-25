import db from "../models";

const User = db.user;

export const allAccess = (req, res) => {
  res.status(200).send("Публичный контент");
};

export const userBoard = (req, res) => {
  res.status(200).send("Контент пользователя");
};

export const adminBoard = (req, res) => {
  res.status(200).send("Контент админа");
};

export const moderatorBoard = (req, res) => {
  res.status(200).send("Контент модератора");
};

export const updateProgress = (req, res) => {
  User.findById(req.body.id).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (!user) {
      res.status(200).send({ message: "Пользователь не найден" });
      return;
    }

    user.progress = req.body.updatedProgress;
    user.save();

    res.status(200).send({
      message: "Прогресс сохранен",
    });
  });
};
