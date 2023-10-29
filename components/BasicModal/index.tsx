import * as React from 'react';

import {Box, Modal, Theme} from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '128rem',
  bgcolor: (theme: Theme) => theme.palette.secondary.main,
  border: '2px solid #000',
  color: '#fff',
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  onClose: (value?: any) => void;
  children: React.ReactNode;
}

export const BasicModal = (props: Props) => {
  const {open, onClose, children} = props;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};
