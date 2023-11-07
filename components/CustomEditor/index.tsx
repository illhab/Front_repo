import {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {EditorProps} from 'react-draft-wysiwyg';
import {ContentState, convertToRaw, EditorState} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import {StyledEditor} from './style';

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  {
    ssr: false,
  },
);

interface Props {
  htmlStr: string;
  setHtmlStr: (text: string) => void;
  placeholder?: string;
}

const CustomEditor = (props: Props) => {
  const {htmlStr, setHtmlStr, placeholder} = props;

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty(),
  );

  useEffect(() => {
    const blocksFromHtml = htmlToDraft(htmlStr);
    if (blocksFromHtml) {
      const {contentBlocks, entityMap} = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap,
      );
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
  }, []);

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
    setHtmlStr(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  return (
    <StyledEditor>
      <Editor
        editorState={editorState}
        wrapperClassName="wrapper-class"
        toolbarClassName="toolbar-class"
        editorClassName="editor-class"
        onEditorStateChange={onEditorStateChange}
        placeholder={placeholder || '설명 편집'}
        toolbar={{
          options: ['inline', 'fontSize', 'list', 'textAlign', 'link'],
        }}
        localization={{
          locale: 'ko',
        }}
      />
    </StyledEditor>
  );
};

export default CustomEditor;
