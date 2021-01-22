const { verifyRegister } = require("../middlewares");
const controller = require("../controllers/auth.controllers");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Header", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  app.post(
    "/register",
    [verifyRegister.checkDuplicateUsernameOrEmail, verifyRegister.checkRolesExisted],
    controller.register
  );

  app.post("/login", controller.login);
};
