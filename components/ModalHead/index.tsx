import {FC} from 'react';
import {Box, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  onClose: () => void;
}

export const ModalHead: FC<Props> = ({onClose}) => {
  return (
    <>
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
    </>
  );
};
