import {FC} from 'react';
import dynamic from 'next/dynamic';

interface Props {
  mode?: 'desc' | 'comment' | 'inlineComment';
  desc?: string;
  comment?: string;
  setDesc?: (text: string) => void;
  setComment?: (text: string) => void;
}

const MarkdownEditor = dynamic<Props>(
  () =>
    import('../MarkdownEditor').then(
      (mod: any) => mod.MarkdownEditor || mod.default,
    ),
  {ssr: false},
);

export const DynamicMarkdownEditor: FC<Props> = ({
  mode,
  desc,
  comment,
  setDesc,
  setComment,
}) => {
  return (
    <MarkdownEditor
      mode={mode}
      desc={desc}
      comment={comment}
      setDesc={setDesc}
      setComment={setComment}
    />
  );
};
