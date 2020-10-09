import React from "react";
import { Link } from "react-router-dom";

const MainPage: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: 'wrap' }}>
      <h1 style={{width: '100%', textAlign: 'center'}}>Здесь будет главная страница</h1>
      <Link to="courses/html">Перейти к курсу по HTML</Link>
    </div>
  );
};

export default MainPage;
