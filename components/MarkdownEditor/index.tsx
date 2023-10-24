import {FC, useEffect, useRef} from 'react';

import SimpleMDE from 'simplemde';
import {Wrapper} from './style';

interface Props {
  mode?: 'desc' | 'comment' | 'inlineComment';
  desc?: string;
  comment?: string;
  setDesc?: (text: string) => void;
  setComment?: (text: string) => void;
}

export const MarkdownEditor: FC<Props> = ({
  mode,
  desc,
  comment,
  setDesc,
  setComment,
}) => {
  const editorRef = useRef<SimpleMDE | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const getInitialValue = () => {
    if (mode === 'desc') return desc;
    if (mode === 'comment') return comment;
    if (mode === 'inlineComment') return comment;
    return '';
  };

  useEffect(() => {
    if (textAreaRef.current) {
      editorRef.current = new SimpleMDE({
        element: textAreaRef.current,
        initialValue: getInitialValue(),
        autosave: {
          enabled: false,
          uniqueId: 'markdownEditorUniqueId',
        },
      });
      editorRef.current.codemirror.on('change', () => {
        const currentValue = editorRef.current!.value();
        if (mode === 'desc' && setDesc) {
          setDesc(currentValue);
        } else if (mode === 'comment' && setComment) {
          setComment(currentValue);
        } else if (mode === 'inlineComment' && setComment) {
          setComment(currentValue);
        }
      });
    }

    return () => {
      editorRef.current = null;
    };
  }, []);

  return (
    <Wrapper>
      <textarea ref={textAreaRef} className="CodeMirror" />
    </Wrapper>
  );
};
