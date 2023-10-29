import {useEffect, useState} from 'react';

import {Button} from '@mui/material';

import {BasicModal} from '@/components';

import {ResponseTicket} from '@/modules';

import {ButtonStyle, CancelButtonStyle, StyledContentWrapper} from './style';
import {useLoadingStore} from '@/states/loading';

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

  useEffect(() => {
    if (selectedTicket) {
      setEditTitle(false);
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

  return (
    <BasicModal open={open} onClose={onClose}>
      <StyledContentWrapper>
        {tempSelectdTicket && (
          <div className="title">
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
        )}
      </StyledContentWrapper>
    </BasicModal>
  );
};
