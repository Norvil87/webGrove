import React from "react";
import { ICourse } from "../../../types";

import { introToHtml } from "./IntroToHtml";
import { HtmlDocument } from "./HtmlDocument";
import { HtmlTable } from "./HTMLTable";
import { HtmlForm } from "./HTMLForm";

export const Html: ICourse = {
  id: 1,
  title: "Курс по HTML",
  blocks: {
    "intro-to-html": introToHtml,
    "html-document": HtmlDocument,
    "html-table": HtmlTable,
    'html-forms': HtmlForm
  },
};
