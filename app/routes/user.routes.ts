import middlewares from "../middlewares";
import { allAccess, userBoard, moderatorBoard, adminBoard, updateProgress } from "../controllers/user.controller";

const { authJwt } = middlewares;
const { verifyToken, isModerator, isAdmin } = authJwt;

const getRoutes = app => {
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  app.post("/userProgress", updateProgress);

  app.get("/api/test/all", allAccess);

  app.get("/api/test/user", [verifyToken], userBoard);

  app.get("/api/test/mod", [verifyToken, isModerator], moderatorBoard);

  app.get("/api/test/admin", [verifyToken, isAdmin], adminBoard);
};

export default getRoutes;
