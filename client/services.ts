import axios from "axios";

export const post = async (url: string, data: any): Promise<any> => {
  const response = await axios({
    url: url,
    method: "POST",
    data,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

  return response.data;
};

// temp. Remove when courseStructure is fetched fron server
export const createCourseStructure = (course: any) => {
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

  return courseStructure;
};
