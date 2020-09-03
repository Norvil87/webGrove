import React from "react";
import "./Output.scss";
import Iframe from "react-iframe";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/types";

const Output = () => {
  const editorValue = useSelector((state: IRootState) => state.editorValue);

  const getGeneratedPageURL = ({ html, css }: any) => {
    const getBlobURL = (code: any, type: any) => {
      const blob = new Blob([code], { type });
      return URL.createObjectURL(blob);
    };

    const cssURL = getBlobURL(css, "text/css");
    console.log(css)
    const source = `
      <html>
        <head>
          ${css ? `<link rel="stylesheet" type="text/css" href="${cssURL}" />` : ''}
        </head>
        <body>
          ${html || ""}
        </body>
      </html>
    `;

    return getBlobURL(source, "text/html");
  };

  const url = getGeneratedPageURL({
    html: editorValue,
    //css: "p { color: red; }",
  });

  return (
    <div className="output">
      <Iframe url={url} />
    </div>
  );
};

export default Output;
