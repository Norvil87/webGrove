import React from "react";
import "./Output.scss";
import Iframe from "react-iframe";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/types";

const Output = () => {
  const editorValue = useSelector((state: IRootState) => state.editorValue);
  console.log(editorValue)
  const passed = false
  const resultMessage = 'Тест не пройден'

  const getGeneratedPageURL = ({ html, css }: any) => {
    const getBlobURL = (code: any, type: any) => {
      const blob = new Blob([code], { type });
      return URL.createObjectURL(blob);
    };

    const cssURL = getBlobURL(css, "text/css");
    const source = `
      <html>
        <head>
          ${css ? `<link rel="stylesheet" type="text/css" href="${cssURL}" />` : ""}
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
    css: "h1 { color: red; }",
  });

  return (
    <div className="output">
      <div className="iframe-output">
        <Iframe title="iframe-output" width="100%" height="100%" className="iframe" url={url} />
      </div>
  <div className="console-output" >{resultMessage ? resultMessage : 'Тесты не проведены'}</div>
    </div>
  );
};

export default Output;
