import React from "react";
import CourseList from "../components/CourseList/CourseList";
import { RouteProps } from "react-router-dom";
import { ICourse } from "../types";

interface ICourcePage {
  course: ICourse
}

const CoursePage: React.FC<ICourcePage> = (course) => {
  return <CourseList {...course} />;
};

export default CoursePage;
