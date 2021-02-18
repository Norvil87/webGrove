import middlewares from "../middlewares";
import { register, login } from "../controllers/auth.controllers";
import verifyRegister from "../middlewares/verifyRegister";

const { checkDuplicateUsernameOrEmail, checkRolesExisted } = verifyRegister;

const getRoutes = app => {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Header", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  app.post("/register", [checkDuplicateUsernameOrEmail, checkRolesExisted], register);

  app.post("/login", login);
};

export default getRoutes;
