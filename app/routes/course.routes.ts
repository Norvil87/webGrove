const controller = require("../controllers/course.controller");

export default function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Header", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  app.post("/courseStructure", controller.createCourseStructure);
  app.post("/lesson", controller.getLesson);
};
