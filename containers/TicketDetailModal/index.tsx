import {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';

import dayjs from 'dayjs';
import {Button} from '@mui/material';

import {BasicModal} from '@/components';

import {ResponseTicket} from '@/modules';

import {ButtonStyle, CancelButtonStyle, StyledContentWrapper} from './style';

import {useLoadingStore} from '@/states/loading';

const CustomEditor = dynamic(() => import('../../components/CustomEditor'), {
  ssr: false,
});

interface Props {
  open: boolean;
  onClose: () => void;
  selectedTicket?: ResponseTicket;
}

export const TicketDetailModal = (props: Props) => {
  const {open, onClose, selectedTicket} = props;

  const {showLoading, hideLoading} = useLoadingStore();

  // 수정 및 저장 시 적용할 ticket 데이터
  const [tempSelectdTicket, setTempSelectedTicket] = useState<ResponseTicket>();
  // 티켓 제목 수정 모드 여부
  const [editTitle, setEditTitle] = useState(false);
  // 내용 수정 모드 여부
  const [editContent, setEditContent] = useState(false);
  // 작성 댓글 state 및 댓글 수정 모드 여부
  const [editComment, setEditComment] = useState(false);
  const [comment, setComment] = useState('');

  // dummy comment list
  const [dummyCommentList, setDummyCommentList] = useState([
    {
      id: '1',
      userId: '1',
      name: 'HJ',
      comment: '빨리 처리해주세용.',
      created: new Date(),
    },
    {
      id: '2',
      userId: '2',
      name: 'TH',
      comment: '빨리빨리',
      created: new Date(),
    },
    {
      id: '3',
      userId: '3',
      name: 'EJ',
      comment: '빨리용',
      created: new Date(),
    },
    {
      id: '4',
      userId: '4',
      name: 'JJ',
      comment: '넹ㅎㅎ',
      created: new Date(),
    },
  ]);

  useEffect(() => {
    if (!open) {
      setEditContent(false);
      setEditTitle(false);
      setEditComment(false);
      setComment('');
      setTempSelectedTicket(undefined);
    }
  }, [open]);

  useEffect(() => {
    if (selectedTicket) {
      setTempSelectedTicket(selectedTicket);
    }
  }, [selectedTicket]);

  const onCancelEditTitle = () => {
    setEditTitle(false);
    setTempSelectedTicket(prev => {
      if (!prev) return;
      return {
        ...prev,
        title: selectedTicket?.title || '',
      };
    });
  };

  const onSaveTitle = async () => {
    try {
      showLoading();
      setEditTitle(false);
      // TODO:: title 수정 API
    } catch (error) {
      console.log(error);
    } finally {
      hideLoading();
    }
  };

  const onCancelEditContent = () => {
    setEditContent(false);
    setTempSelectedTicket(prev => {
      if (!prev) return;
      return {
        ...prev,
        content: selectedTicket?.content || '',
      };
    });
  };

  const onSaveContent = async () => {
    try {
      showLoading();
      setEditContent(false);
      // TODO:: content 수정 API
    } catch (error) {
      console.log(error);
    } finally {
      hideLoading();
    }
  };

  const onCancelEditComment = () => {
    setEditComment(false);
    setComment('');
  };

  const onSaveComment = async () => {
    try {
      showLoading();
      setEditComment(false);
      // TODO:: comment 등록 API
      setDummyCommentList(prev => {
        return prev.concat({
          id: String(prev.length + 1),
          userId: '4',
          name: 'HJ',
          comment: comment,
          created: new Date(),
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      setComment('');
      hideLoading();
    }
  };

  return (
    <BasicModal open={open} onClose={onClose}>
      <StyledContentWrapper>
        {tempSelectdTicket && (
          <>
            <div className="left-box">
              <div className="title-section">
                <input
                  value={tempSelectdTicket.title}
                  onChange={e => {
                    setTempSelectedTicket(prev => {
                      if (!prev) return;
                      return {
                        ...prev,
                        title: e.target.value,
                      };
                    });
                  }}
                  onClick={() => setEditTitle(true)}
                />
                {editTitle && (
                  <div className="btn-wrapper">
                    <Button
                      variant="contained"
                      size="large"
                      sx={CancelButtonStyle}
                      onClick={onCancelEditTitle}
                    >
                      취소
                    </Button>
                    <Button
                      variant="contained"
                      size="large"
                      sx={ButtonStyle}
                      onClick={onSaveTitle}
                    >
                      저장
                    </Button>
                  </div>
                )}
              </div>
              <div className="content-section">
                {editContent && (
                  <>
                    <CustomEditor
                      htmlStr={tempSelectdTicket?.content}
                      setHtmlStr={text =>
                        setTempSelectedTicket(prev => {
                          if (!prev) return;
                          return {
                            ...prev,
                            content: text,
                          };
                        })
                      }
                    />
                    <div className="btn-wrapper">
                      <Button
                        variant="contained"
                        size="large"
                        sx={CancelButtonStyle}
                        onClick={onCancelEditContent}
                      >
                        취소
                      </Button>
                      <Button
                        variant="contained"
                        size="large"
                        sx={ButtonStyle}
                        onClick={onSaveContent}
                      >
                        저장
                      </Button>
                    </div>
                  </>
                )}
                <div
                  className="content"
                  style={{visibility: editContent ? 'hidden' : 'visible'}}
                  onClick={() => setEditContent(true)}
                  dangerouslySetInnerHTML={{
                    __html: tempSelectdTicket.content || '',
                  }}
                />
              </div>
              <div className="comment-section">
                <div className="user-icon">HJ</div>
                <div className="comment-wrapper">
                  {editComment ? (
                    <>
                      <CustomEditor
                        htmlStr={comment}
                        setHtmlStr={text => setComment(text)}
                      />
                      <div className="btn-wrapper">
                        <Button
                          variant="contained"
                          size="large"
                          sx={CancelButtonStyle}
                          onClick={onCancelEditComment}
                        >
                          취소
                        </Button>
                        <Button
                          variant="contained"
                          size="large"
                          sx={ButtonStyle}
                          onClick={onSaveComment}
                        >
                          저장
                        </Button>
                      </div>
                    </>
                  ) : (
                    <input
                      placeholder="댓글 추가..."
                      onClick={() => setEditComment(true)}
                    />
                  )}
                </div>
              </div>
              <div className="comment-list-section">
                {dummyCommentList.map(item => (
                  <div className="user-comment-item" key={item.id}>
                    <div className="user-icon">{item.name}</div>
                    <div>
                      <div className="user-info">
                        <div>{item.name}</div>
                        <div>
                          {dayjs(item.created).format('YYYY.MM.DD HH:mm')}
                        </div>
                      </div>
                      <div
                        className="user-comment"
                        dangerouslySetInnerHTML={{__html: item.comment}}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="right-box">
              <div className="ticket-info-section">티켓 세부 정보 영역</div>
            </div>
          </>
        )}
      </StyledContentWrapper>
    </BasicModal>
  );
};
