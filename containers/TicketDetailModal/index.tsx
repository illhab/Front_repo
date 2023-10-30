import {useEffect, useRef, useState} from 'react';
import dynamic from 'next/dynamic';

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

  const [editTitle, setEditTitle] = useState(false);

  const [editContent, setEditContent] = useState(false);

  // 티켓 내용 content

  const viewContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      setEditContent(false);
      setEditTitle(false);
      setTempSelectedTicket(undefined);
    }
  }, [open]);

  useEffect(() => {
    if (selectedTicket) {
      setTempSelectedTicket(selectedTicket);
    }
  }, [selectedTicket]);

  useEffect(() => {
    if (!tempSelectdTicket) return;
    if (viewContainerRef.current) {
      viewContainerRef.current.innerHTML = tempSelectdTicket.content;
    }
  }, [tempSelectdTicket]);

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

  return (
    <BasicModal open={open} onClose={onClose}>
      <StyledContentWrapper>
        {tempSelectdTicket && (
          <>
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
                ref={viewContainerRef}
                onClick={() => setEditContent(true)}
              />
            </div>
          </>
        )}
      </StyledContentWrapper>
    </BasicModal>
  );
};
