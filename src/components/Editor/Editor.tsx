import React from "react";
import { ControlledEditor } from "@monaco-editor/react";
import IModelContentChangedEvent from "@monaco-editor/react/lib";

import "./Editor.scss";
import { useDispatch } from "react-redux";
import { setEditorValue } from "../../store/actions";

interface IEditor {
  initValues: any;
}

const Editor: React.FC<IEditor> = ({ initValues }) => {
  const { html, css, js } = initValues;
  const dispatch = useDispatch();
  const options = {
    minimap: { enabled: false },
    overviewRulerBorder: false,
    overviewRulerLanes: 0,
  };

  const initialValue = `<html>\n <head>\n${css}\n</head>\n <body>\n  ${html}\n </body>\n</html>`;

  const handleValueChange = (ev: any, value: string) => {
    console.log(value)
    dispatch(setEditorValue(value));
  };

  const onEditorMount = () => {
    dispatch(setEditorValue(initialValue));
  };

  return (
    <div className="editor">
      <ControlledEditor
        options={options}
        onChange={handleValueChange}
        editorDidMount={onEditorMount}
        language="html"
        value={initialValue}
      />
    </div>
  );
};

export default Editor;
