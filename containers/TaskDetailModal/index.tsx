import {FC, useState} from 'react';
import {Box, Typography, Modal, Fade} from '@mui/material';

import {
  PopOver,
  InfoList,
  DynamicMarkdownEditor,
  ModalHead,
  ModalDescSection,
  ModalCommentInputSection,
  ModalCommentListSection,
  ModalBtnSet,
} from '@/components';
import {ItemType} from '@/types';
import {dummyUsers} from '@/contants';

import {ModalBackground, ModalContent} from './style';

interface Props {
  isModalOpen: boolean;
  selectedItem?: ItemType;
  onClose: () => void;
}

export const TaskDetailModal: FC<Props> = ({
  isModalOpen,
  selectedItem,
  onClose,
}) => {
  const [desc, setDesc] = useState<string>('');
  const [isEditingDescription, setEditingDescription] =
    useState<boolean>(false);

  const [comment, setComment] = useState<string>('');
  const [isEditingComment, setEditingComment] = useState<boolean>(false);

  const [isEditingInlineComment, setEditingInlineComment] =
    useState<boolean>(false);
  const [commentTime, setCommentTime] = useState<string>('');

  //임시로 더미 유저 사용, 추후 변경 필요
  const assignee = dummyUsers.find(user => user.id === 2)?.name;
  const reporter = dummyUsers.find(user => user.id === 1)?.name;

  //함수1 : 본문 추가
  const handleDescSave = () => {
    //작성한 본문 post api 추가
    setEditingDescription(false);
  };
  //함수2 : 본문 추가 취소
  const handleDescCancle = () => {
    setEditingDescription(false);
  };
  //함수3 : 본문 마크다운 에디터 열기
  const handleDescEditOpen = () => {
    setEditingDescription(true);
  };

  //함수4 : 답글 추가
  const handleCommentSave = () => {
    //답글 post api 추가
    setEditingComment(false);
    setCommentTime(new Date().toISOString());
  };
  //함수5 : 답글 추가 취소
  const handleCommentCancle = () => {
    setEditingComment(false);
  };
  //함수6 : 답글 입력창 마크다운 에디터 열기
  const handleCommentEditOpen = () => {
    setEditingComment(true);
  };

  //함수7 : 답글 수정
  const handleInlineCommentSave = () => {
    //답글 update api 추가
    setEditingInlineComment(false);
  };
  //함수8 : 답글 수정 취소
  const handleInlineCommentCancle = () => {
    setEditingInlineComment(false);
  };
  //함수9 : 작성된 답글에서 마크다운 에디터 열기
  const handleInlineCommentEditOpen = () => {
    setEditingInlineComment(true);
  };
  //함수10 : 답글 삭제
  const handelInlineCommentDelete = () => {
    //답글 delete api 추가
    setEditingComment(false);
    setComment('');
  };

  return (
    <Modal open={isModalOpen} aria-labelledby="modal-title">
      <Fade in={isModalOpen}>
        <Box sx={ModalBackground}>
          <Box sx={ModalContent}>
            {/* 헤드 섹션 */}
            <ModalHead onClose={onClose} />
            {/* 바디 섹션 */}
            <Box sx={{display: 'flex'}}>
              {/* 바디 좌측 */}
              <Box sx={{flex: '2 2 0%', paddingRight: '20px'}}>
                {/* 본문 섹션 */}
                <ModalDescSection
                  selectedItem={selectedItem}
                  isEditingDescription={isEditingDescription}
                  desc={desc}
                  setDesc={setDesc}
                  handleDescSave={handleDescSave}
                  handleDescCancle={handleDescCancle}
                  handleDescEditOpen={handleDescEditOpen}
                />

                {/* 답글 입력 섹션 */}
                <ModalCommentInputSection
                  assignee={assignee}
                  isEditingComment={isEditingComment}
                  comment={comment}
                  setComment={setComment}
                  handleCommentSave={handleCommentSave}
                  handleCommentCancle={handleCommentCancle}
                  handleCommentEditOpen={handleCommentEditOpen}
                />

                {/* 답글 보이는 섹션 */}
                {comment && (
                  <ModalCommentListSection
                    assignee={assignee}
                    commentTime={commentTime}
                    isEditingInlineComment={isEditingInlineComment}
                    comment={comment}
                    setComment={setComment}
                    handleInlineCommentSave={handleInlineCommentSave}
                    handleInlineCommentCancle={handleInlineCommentCancle}
                    handleInlineCommentEditOpen={handleInlineCommentEditOpen}
                    handelInlineCommentDelete={handelInlineCommentDelete}
                  />
                )}
              </Box>
              {/* 바디 우측 */}
              <Box sx={{flex: '1 1 0%'}}>
                <PopOver />
                <InfoList assignee={assignee} reporter={reporter} />
                <Typography variant="h5">
                  생성일 : {selectedItem?.created.toLocaleDateString()}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
