import React, { useRef, useState } from "react";
import { ControlledEditor } from "@monaco-editor/react";
import monacoEditor from "monaco-editor/esm/vs/editor/editor.api";
import { useDispatch, useSelector } from "react-redux";
import { setEditorValue, setEditorValues } from "../../store/actions";
import { IEditorValues } from "../../../../shared/types";
import { IRootState } from "../../store/types";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import "./Editor.scss";

interface IEditor {
  initValues: IEditorValues;
  outerWidth?: number;
}

const Editor: React.FC<IEditor> = ({ initValues, outerWidth }) => {
  const { html, css, js, courseUrl } = useSelector((state: IRootState) => {
    return {
      html: state.editorValues.html,
      css: state.editorValues.css,
      js: state.editorValues.js,
      courseUrl: state.courseStructure?.url,
    };
  });

  const htmlEditorRef = useRef(null);
  const cssEditorRef = useRef(null);
  const [width, setWidth] = useState(0);

  if (outerWidth !== width) {
    htmlEditorRef.current.layout();
    cssEditorRef.current.layout();
    setWidth(outerWidth);
  }

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
    hover: {
      enabled: false,
    },
  };

  const handleHtmlValueChange = (ev: monacoEditor.editor.IModelContentChangedEvent, html: string) => {
    dispatch(setEditorValue("html", html));
  };

  const handleCssValueChange = (ev: monacoEditor.editor.IModelContentChangedEvent, css: string) => {
    dispatch(setEditorValue("css", css));
  };

  const onHtmlEditorMount = (getEditorValue: () => string, editor: monacoEditor.editor.IStandaloneCodeEditor) => {
    htmlEditorRef.current = editor;
    dispatch(setEditorValues(initValues));
  };

  const onCssEditorMount = (getEditorValue: () => string, editor: monacoEditor.editor.IStandaloneCodeEditor) => {
    cssEditorRef.current = editor;
    dispatch(setEditorValues(initValues));
  };

  return (
    <div className="editor">
      <ReflexContainer orientation="horizontal">
        <ReflexElement>
          <ControlledEditor
            options={options}
            onChange={handleHtmlValueChange}
            editorDidMount={onHtmlEditorMount}
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
              editorDidMount={onCssEditorMount}
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
