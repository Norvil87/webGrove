import React from "react";
import "./Output.scss";
import Iframe from "react-iframe";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/types";
import { IInitEditorValues } from "../../types";

const Output = () => {
  const { html, css, js } = useSelector((state: IRootState) => state.editorValues);
  const { passed, message } = useSelector((state: IRootState) => state.currentExercise);

  const getGeneratedPageURL = ({ html, css, js }: IInitEditorValues) => {
    const getBlobURL = (code: string, type: string) => {
      const blob = new Blob([code], { type });
      return URL.createObjectURL(blob);
    };

    const cssURL = getBlobURL(css, "text/css");
    const jsURL = getBlobURL(js, "text/javscript");

    const source = `
      <!DOCTYPE html>
      <html>
        <head>
          ${css ? `<link rel="stylesheet" type="text/css" href="${cssURL}" />` : ""}
          ${js ? `<script type="text/javascript" src="${jsURL}" />` : ""}
        </head>
        <body>
          ${html || ""}
        </body>
      </html>
    `;

    return getBlobURL(source, "text/html");
  };

  const url = getGeneratedPageURL({
    html: html,
    css: css,
    js: js,
  });

  const renderMessage = () => {
    let array: JSX.Element[] = [];
    if (passed !== undefined) {
      message.map((string, i) => {
        array.push(
          <p key={i} className={passed ? "task_passed" : "task_failed"}>
            {string}
          </p>
        );
      });
    } else {
      array.push(<p key={"initMessage"}>Тесты не запущены</p>);
    }

    return array;
  };

  return (
    <div className="output">
      <div className="iframe-output">
        <Iframe title="iframe-output" width="100%" height="100%" className="iframe" url={url} />
      </div>
      <div className="console-output">{renderMessage()}</div>
    </div>
  );
};

export default Output;
