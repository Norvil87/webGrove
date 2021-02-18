import { createCourseStructure, getLesson } from "../controllers/course.controller";

const getRoutes = app => {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Header", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  app.post("/courseStructure", createCourseStructure);
  app.post("/lesson", getLesson);
};

export default getRoutes;
