import {FC} from 'react';
import {Button, Typography} from '@mui/material';

interface Props {
  onSave?: () => void;
  onCancle?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  type: 'btn' | 'typo';
}

export const ModalBtnSet: FC<Props> = ({
  onSave,
  onCancle,
  onEdit,
  onDelete,
  type,
}) => {
  if (type === 'btn') {
    return (
      <>
        <Button
          variant="contained"
          onClick={onSave}
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
          onClick={onCancle}
          sx={{
            marginRight: '1rem',
            fontWeight: 'bold',
            fontSize: '1.5rem',
          }}
        >
          취소
        </Button>
      </>
    );
  }
  if (type === 'typo') {
    return (
      <>
        <Typography
          sx={{
            fontSize: '1.5rem',
            color: 'grey',
            marginRight: '1rem',
            cursor: 'pointer',
          }}
          onClick={onEdit}
        >
          편집
        </Typography>
        <Typography
          sx={{
            fontSize: '1.5rem',
            color: 'grey',
            cursor: 'pointer',
          }}
          onClick={onDelete}
        >
          삭제
        </Typography>
      </>
    );
  }
  return null;
};
