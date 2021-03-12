import React, { useRef, useState, useEffect } from "react";
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
  const jsEditorRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    htmlEditorRef.current && htmlEditorRef.current.layout();
    cssEditorRef.current && cssEditorRef.current.layout();
    jsEditorRef.current && jsEditorRef.current.layout();
    setWidth(outerWidth);
  }, [outerWidth]);

  const dispatch = useDispatch();

  const htmlEditorRequired = courseUrl === "html" || courseUrl === "css";
  const cssEditorRequired = courseUrl === "css";
  const jsEditorRequired = courseUrl === "js";
  const editorSplitRequired = cssEditorRequired;

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

  const handleValueChange = (editor: string) => (ev: monacoEditor.editor.IModelContentChangedEvent, value: string) => {
    dispatch(setEditorValue(editor, value));
  };

  const handleEditorMount = (ref: React.MutableRefObject<any>) => (
    getEditorValue: () => string,
    editor: monacoEditor.editor.IStandaloneCodeEditor
  ) => {
    ref.current = editor;
    dispatch(setEditorValues(initValues));
  };

  return (
    <div className="editor">
      <ReflexContainer orientation="horizontal">
        {htmlEditorRequired && (
          <ReflexElement>
            <ControlledEditor
              options={options}
              onChange={handleValueChange("html")}
              editorDidMount={handleEditorMount(htmlEditorRef)}
              language="html"
              value={html}
            />
          </ReflexElement>
        )}
        {editorSplitRequired && <ReflexSplitter />}
        {cssEditorRequired && (
          <ReflexElement>
            <ControlledEditor
              options={options}
              onChange={handleValueChange("css")}
              editorDidMount={handleEditorMount(cssEditorRef)}
              language="css"
              value={css}
            />
          </ReflexElement>
        )}
        {jsEditorRequired && (
          <ReflexElement>
            <ControlledEditor
              options={options}
              onChange={handleValueChange("js")}
              editorDidMount={handleEditorMount(jsEditorRef)}
              language="javascript"
              value={js}
            />
          </ReflexElement>
        )}
      </ReflexContainer>
    </div>
  );
};

export default Editor;
