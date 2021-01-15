import React from "react";
import { ControlledEditor } from "@monaco-editor/react";
import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";
import "./Editor.scss";
import { useDispatch, useSelector } from "react-redux";
import { setEditorValue, setEditorValues } from "../../store/actions";
import { IEditorValues } from "../../types";
import { IRootState } from "../../store/types";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";

interface IEditor {
  initValues: IEditorValues;
}

const Editor: React.FC<IEditor> = ({ initValues }) => {
  const { html, css, js, courseUrl } = useSelector((state: IRootState) => {
    return {
      html: state.editorValues.html,
      css: state.editorValues.css,
      js: state.editorValues.js,
      courseUrl: state.course?.url,
    };
  });

  const dispatch = useDispatch();
  const inCssMode = courseUrl === "css";

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

  const handleHtmlValueChange = (ev: monacoEditor.editor.IModelContentChangedEvent, html: string) => {
    dispatch(setEditorValue("html", html));
  };

  const handleCssValueChange = (ev: monacoEditor.editor.IModelContentChangedEvent, css: string) => {
    dispatch(setEditorValue("css", css));
  };

  const onEditorMount = () => {
    dispatch(setEditorValues(initValues));
  };

  return (
    <div className="editor">
      <ReflexContainer orientation="horizontal">
        <ReflexElement>
          <ControlledEditor
            options={options}
            onChange={handleHtmlValueChange}
            editorDidMount={onEditorMount}
            language="html"
            value={html}
          />
        </ReflexElement>
        {inCssMode && <ReflexSplitter />}
        {inCssMode && (
          <ReflexElement>
            <ControlledEditor
              options={options}
              onChange={handleCssValueChange}
              editorDidMount={onEditorMount}
              language="css"
              value={css}
            />
          </ReflexElement>
        )}
      </ReflexContainer>
    </div>
  );
};

export default Editor;
