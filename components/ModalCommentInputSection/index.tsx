import {FC} from 'react';
import {Box, OutlinedInput} from '@mui/material';
import {DynamicMarkdownEditor, ModalBtnSet, UserProfile} from '@/components';

interface Props {
  assignee?: string;
  isEditingComment: boolean;
  comment?: string;
  setComment: (desc: string) => void;
  handleCommentSave: () => void;
  handleCommentCancle: () => void;
  handleCommentEditOpen: () => void;
}

export const ModalCommentInputSection: FC<Props> = ({
  assignee,
  isEditingComment,
  comment,
  setComment,
  handleCommentSave,
  handleCommentCancle,
  handleCommentEditOpen,
}) => {
  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      {/* 유저 프로필 */}
      <UserProfile type="assignee" assignee={assignee} />

      {isEditingComment ? (
        //답글 작성 중일 때
        <Box>
          <DynamicMarkdownEditor
            mode="comment"
            comment={comment}
            setComment={setComment}
          />
          <ModalBtnSet
            type="btn"
            onSave={handleCommentSave}
            onCancle={handleCommentCancle}
          />
        </Box>
      ) : (
        // 답글 작성 중이 아닐 때
        <OutlinedInput
          placeholder="댓글 추가 ..."
          onClick={handleCommentEditOpen}
          sx={{
            width: '100%',
            '& .MuiInputBase-input': {
              fontSize: '1rem',
            },
            '& .MuiInputBase-input::placeholder': {
              fontSize: '1.5rem',
            },
          }}
        />
      )}
    </Box>
  );
};
