import React from "react";
import CourseList from "../components/CourseStructure/CourseStructure";
import { ICourse } from "../types";
import "./CoursePage.scss";

interface ICoursePage {
  course: ICourse;
}

const CoursePage: React.FC<ICoursePage> = course => {
  const { title, info } = course.course;
  const { goal, result, prerequisite, followup } = info;

  return (
    <section className="content__course-structure">
      <header className="course__header">
        <div className="centrifier">
          <h2>{title}</h2>
          <div className="course__info">
            <div className="course__info-item">
              <span>Зачем?</span>
              <p>{goal}</p>
            </div>
            <div className="course__info-item">
              <span>Что на выходе?</span>
              <p>{result}</p>
            </div>
            <div className="course__info-item">
              <span>Что нужно?</span>
              <p>{prerequisite}</p>
            </div>
            <div className="course__info-item">
              <span>Что потом?</span>
              <p>{followup}</p>
            </div>
          </div>
        </div>
      </header>
      <CourseList {...course} />
    </section>
  );
};

export default CoursePage;
