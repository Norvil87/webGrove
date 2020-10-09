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

  //const initialValue = `<html>\n <head>\n${css}\n </head>\n <body>\n  ${html}\n </body>\n</html>`;

  const parseString = (string: string) => {
    //const html = string.substring(string.indexOf("<body>"), string.indexOf("</body"));
    //const css = string.substring(string.indexOf("<style>"), string.indexOf("</style"));
    //const js = string.substring(string.indexOf("<script>"), string.indexOf("</script"));

    //return { html, css, js };
    return { html: string, css: "", js: "" };
  };

  const handleValueChange = (ev: monacoEditor.editor.IModelContentChangedEvent, value: string) => {
    const parsedValue = parseString(value);
    dispatch(setEditorValue(parsedValue));
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
