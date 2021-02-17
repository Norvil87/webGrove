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
