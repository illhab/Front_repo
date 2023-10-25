import {FC} from 'react';
import ReactMarkdown from 'react-markdown';
import {Box, Typography} from '@mui/material';

import {DynamicMarkdownEditor, ModalBtnSet, UserProfile} from '@/components';
import {timeAgo} from '@/utils';

interface Props {
  assignee?: string;
  commentTime?: string;
  isEditingInlineComment: boolean;
  comment?: string;
  setComment: (desc: string) => void;
  handleInlineCommentSave: () => void;
  handleInlineCommentCancle: () => void;
  handleInlineCommentEditOpen: () => void;
  handelInlineCommentDelete: () => void;
}

export const ModalCommentListSection: FC<Props> = ({
  assignee,
  commentTime,
  isEditingInlineComment,
  comment,
  setComment,
  handleInlineCommentSave,
  handleInlineCommentCancle,
  handleInlineCommentEditOpen,
  handelInlineCommentDelete,
}) => {
  return (
    <Box sx={{display: 'flex', alignItems: 'center', marginTop: '3rem'}}>
      <UserProfile type="assignee" assignee={assignee} />
      <Box>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Box sx={{marginRight: '1rem'}}>
            <Typography variant="h5">{assignee}</Typography>
          </Box>
          <Typography variant="h5">
            {commentTime ? timeAgo(new Date(commentTime)) : ''}
          </Typography>
        </Box>

        {isEditingInlineComment ? (
          //이미 작성된 답글 수정 중일 때
          <Box>
            <DynamicMarkdownEditor
              mode="inlineComment"
              comment={comment}
              setComment={setComment}
            />
            <ModalBtnSet
              type="btn"
              onSave={handleInlineCommentSave}
              onCancle={handleInlineCommentCancle}
            />
          </Box>
        ) : (
          //이미 작성된 답글 수정 중이 아닐 때
          <>
            <Typography
              sx={{
                width: '100%',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                marginBottom: '1rem',
              }}
            >
              <ReactMarkdown>{comment}</ReactMarkdown>
            </Typography>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <ModalBtnSet
                type="typo"
                onEdit={handleInlineCommentEditOpen}
                onDelete={handelInlineCommentDelete}
              />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
