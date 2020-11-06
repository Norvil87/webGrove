import React from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import roadmap from "../../img/roadmap_ru.png";

const Roadmap: React.FC = () => {
  return (
    <Accordion preExpanded={["roadmap"]}>
      <AccordionItem uuid="roadmap">
        <AccordionItemHeading>
          <AccordionItemButton> Увидеть путь</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="roadmap">
            <img src={roadmap} />
            <Link to="/courses/html" className="roadmap__link html-link">
              <span>HTML</span> Пройти курс
            </Link>
            <Link to="/courses/css" className="roadmap__link css-link">
              <span>CSS</span> Пройти курс
            </Link>
            <Link to="/courses/js" className="roadmap__link js-link">
              <span>Javascript</span> Пройти курс
            </Link>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Roadmap;
