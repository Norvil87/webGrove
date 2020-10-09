import React from "react";
import { ICourse, ICourseBlocks } from "../../../types";

import { introToHtml } from "./IntroToHtml";
import { HtmlDocument } from "./HtmlDocument";

export const Html: ICourse = {
  id: 1,
  title: "Курс по HTML",
  blocks: {
    "intro-to-html": introToHtml,
    "html-document": HtmlDocument
  },
};
