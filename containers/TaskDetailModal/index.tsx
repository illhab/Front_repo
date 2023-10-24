import {FC, useState} from 'react';
import ReactMarkdown from 'react-markdown';

import {
  Box,
  Typography,
  OutlinedInput,
  Button,
  Modal,
  Fade,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {PopOver, InfoList, DynamicMarkdownEditor} from '@/components';
import {ItemType} from '@/types';
import {dummyUsers} from '@/contants';
import {timeAgo} from '@/utils';

import {ModalBackground, ModalContent, Wrapper} from './style';

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

  const [commentTime, setCommentTime] = useState<string | null>(null);

  //임시로 더미 유저 사용, 추후 변경 필요
  const assignee = dummyUsers.find(user => user.id === 2)?.name;
  const reporter = dummyUsers.find(user => user.id === 1)?.name;

  return (
    <Modal open={isModalOpen} onClose={onClose} aria-labelledby="modal-title">
      <Fade in={isModalOpen}>
        <Wrapper>
          <Box sx={ModalBackground}>
            <Box sx={ModalContent}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '5px',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <Typography variant="h5" id="modal-modal-title">
                  상태아이콘 FRON-1
                </Typography>
                <CloseIcon
                  onClick={onClose}
                  fontSize="large"
                  sx={{cursor: 'pointer'}}
                ></CloseIcon>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                }}
              >
                <Box sx={{flex: '2 2 0%', paddingRight: '20px'}}>
                  <Typography variant="h3" sx={{paddingBottom: '20px'}}>
                    {selectedItem?.title}
                  </Typography>
                  <Box sx={{paddingBottom: '10rem'}}>
                    <Typography
                      variant="h5"
                      sx={{fontWeight: 'bold', marginBottom: '1rem'}}
                    >
                      설명
                    </Typography>
                    {isEditingDescription ? (
                      <Box>
                        <DynamicMarkdownEditor
                          mode="desc"
                          desc={desc}
                          setDesc={setDesc}
                        />
                        <Button
                          variant="contained"
                          onClick={() => {
                            setEditingDescription(false);
                          }}
                          sx={{
                            marginRight: '1rem',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                          }}
                        >
                          저장
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => {
                            setEditingDescription(false);
                          }}
                          sx={{
                            marginRight: '1rem',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                          }}
                        >
                          취소
                        </Button>
                      </Box>
                    ) : (
                      <Box
                        sx={{fontSize: '1.5rem'}}
                        onClick={() => setEditingDescription(true)}
                      >
                        {desc ? (
                          <ReactMarkdown>{desc}</ReactMarkdown>
                        ) : (
                          '설명 편집'
                        )}
                      </Box>
                    )}
                  </Box>
                  <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Box sx={{marginRight: '1.5rem'}}>
                      <div className="user-wrapper">
                        <div className="user-icon">
                          {dummyUsers.find(user => user.id === 2)?.name}
                        </div>
                      </div>
                    </Box>

                    {isEditingComment ? (
                      <Box>
                        <DynamicMarkdownEditor
                          mode="comment"
                          comment={comment}
                          setComment={setComment}
                        />
                        <Button
                          variant="contained"
                          onClick={() => {
                            setEditingComment(false);
                            setCommentTime(new Date().toISOString());
                          }}
                          sx={{
                            marginRight: '1rem',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                          }}
                        >
                          저장
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => {
                            setEditingComment(false);
                          }}
                          sx={{
                            marginRight: '1rem',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                          }}
                        >
                          취소
                        </Button>
                      </Box>
                    ) : (
                      <OutlinedInput
                        placeholder="댓글 추가 ..."
                        onClick={() => setEditingComment(true)}
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
                  {comment && (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '3rem',
                      }}
                    >
                      <Box sx={{marginRight: '1.5rem'}}>
                        <div className="user-wrapper">
                          <div className="user-icon">
                            {dummyUsers.find(user => user.id === 2)?.name}
                          </div>
                        </div>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <Box sx={{marginRight: '1rem'}}>
                            <Typography variant="h5">
                              {dummyUsers.find(user => user.id === 2)?.name}
                            </Typography>
                          </Box>
                          <Typography variant="h5">
                            {commentTime ? timeAgo(new Date(commentTime)) : ''}
                          </Typography>
                        </Box>

                        {isEditingInlineComment ? (
                          <Box>
                            <DynamicMarkdownEditor
                              mode="inlineComment"
                              comment={comment}
                              setComment={setComment}
                            />
                            <Button
                              variant="contained"
                              onClick={() => setEditingInlineComment(false)}
                              sx={{
                                marginRight: '1rem',
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                              }}
                            >
                              저장
                            </Button>
                            <Button
                              variant="contained"
                              onClick={() => setEditingInlineComment(false)}
                              sx={{
                                marginRight: '1rem',
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                              }}
                            >
                              취소
                            </Button>
                          </Box>
                        ) : (
                          <>
                            <Typography
                              sx={{
                                width: '100%',
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                                marginBottom: '1rem',
                              }}
                            >
                              {comment}
                            </Typography>
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                              <Typography
                                sx={{
                                  fontSize: '1.5rem',
                                  color: 'grey',
                                  marginRight: '1rem',
                                  cursor: 'pointer',
                                }}
                                onClick={() => {
                                  setEditingInlineComment(true);
                                }}
                              >
                                편집
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: '1.5rem',
                                  color: 'grey',
                                  cursor: 'pointer',
                                }}
                                onClick={() => {
                                  setEditingComment(false);
                                  setComment('');
                                }}
                              >
                                삭제
                              </Typography>
                            </Box>
                          </>
                        )}
                      </Box>
                    </Box>
                  )}
                </Box>
                <Box sx={{flex: '1 1 0%'}}>
                  <PopOver />
                  <InfoList assigneeName={assignee} reporterName={reporter} />
                  <Typography variant="h5">
                    생성일 : {selectedItem?.created.toLocaleDateString()}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Wrapper>
      </Fade>
    </Modal>
  );
};
