import courses from "../../courses";

export const createCourseStructure = (req, res) => {
  const course = courses[req.body.courseUrl.toUpperCase()];

  const courseStructure = JSON.parse(JSON.stringify(course));

  const lessons = courseStructure.lessons;
  for (const lesson in lessons) {
    const excercises = lessons[lesson].excercises;
    for (const excercise of excercises) {
      delete excercise.theory;
      delete excercise.tasks;
      delete excercise.goal;
      delete excercise.initValues;
    }
  }

  if (!courseStructure) {
    return res.status(500).send({ message: "Не удалось создать структуру курса" });
  }

  res.status(200).send(courseStructure);
};

export const getLesson = (req, res) => {
  const { courseUrl, lessonUrl } = req.body;
  const course = courses[courseUrl.toUpperCase()];
  const lesson = course.lessons[lessonUrl];

  if (!lesson) {
    return res.status(404).send({ message: "Неверный url урока" });
  }

    res.status(200).send(lesson);
};
