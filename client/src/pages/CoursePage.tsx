import React, { useEffect, useState } from "react";
import CourseList from "../components/CourseStructure/CourseStructure";
import "./CoursePage.scss";
import { post } from "../../services";

interface ICoursePage {
  courseUrl: string;
}

const CoursePage: React.FC<ICoursePage> = courseUrl => {
  const [courseStructure, setCourseStructure] = useState(null);

  const fetchCourseStructure = async () => {
    const courseStructure = await post("http://localhost:8081/courseStructure", courseUrl);
    setCourseStructure(courseStructure);
  };

  useEffect(() => {
    fetchCourseStructure();
  }, []);

  if (!courseStructure) {
    return null;
  }

  const { title, info } = courseStructure;
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
      <CourseList courseStructure={courseStructure} />
    </section>
  );
};

export default CoursePage;
