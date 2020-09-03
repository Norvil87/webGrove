import React from "react";
import { ControlledEditor } from "@monaco-editor/react";
import IModelContentChangedEvent from "@monaco-editor/react/lib";

import "./Editor.scss";
import { useDispatch } from "react-redux";
import { setEditorValue } from "../../store/actions";

const Editor = () => {
  const dispatch = useDispatch();
  const options = {};

  const initialValue = "<h1>Hello</h1>";

  const handleValueChange = (ev: any, value: string) => {
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
