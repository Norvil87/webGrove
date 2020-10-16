import React from "react";
import { ControlledEditor } from "@monaco-editor/react";
import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";
import "./Editor.scss";
import { useDispatch } from "react-redux";
import { setEditorValue } from "../../store/actions";
import { IInitEditorValues } from "../../types";

interface IEditor {
  initValues: IInitEditorValues;
}

const Editor: React.FC<IEditor> = ({ initValues }) => {
  const { html, css, js } = initValues;
  const dispatch = useDispatch();

  const options: monacoEditor.editor.IEditorOptions = {
    minimap: { enabled: false },
    overviewRulerBorder: false,
    overviewRulerLanes: 0,
    renderLineHighlight: "gutter",
    scrollbar: { vertical: "hidden" },
    wordWrap: "bounded",
    quickSuggestions: {
      other: false,
      comments: false,
      strings: false,
    },
    suggestOnTriggerCharacters: false,
  };

  const handleValueChange = (ev: monacoEditor.editor.IModelContentChangedEvent, value: string) => {
     dispatch(setEditorValue({ html: value, css: css, js: "" }));
  };

  const onEditorMount = () => {
    dispatch(setEditorValue(initValues));
  };

  return (
    <div className="editor">
      <ControlledEditor
        options={options}
        onChange={handleValueChange}
        editorDidMount={onEditorMount}
        language="html"
        value={html}
      />
    </div>
  );
};

export default Editor;
